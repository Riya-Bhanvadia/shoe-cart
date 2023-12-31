const userModel = require("../model/userModel.js");
// const Product = require("../model/productCategoryModel");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");
const JWT = require("jsonwebtoken");

exports.registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      res.send({ error: "name is required" });
    }
    const hashedPassword = await hashPassword(password);

    const isAdmin = await userModel.find();
    if (isAdmin.length === 0) {
      const user = await userModel.create({
        name: name,
        email: email,
        password: hashedPassword,
        role: true,
      });
      console.log(user._id);
      res.json({ user: user });
    } else {
      const existingUser = await userModel.findOne({ email: email });
      console.log(existingUser);
      if (existingUser) {
        const error = new Error("Email already exists");
        error.statusCode = 404;
        throw error;

      }

      const user = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });
    
      res.status(201).send({
        success: true,
        message: "successfully registered",
        user: user,
      });
    }
  } catch (error) {
    // console.log(error);
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("invalid email or password");
      error.statusCode = 404;
      throw error;
   
    }
    const dates = new Date().toLocaleDateString();

    const user = await userModel.findOne({ email });
    const status = await userModel.findOneAndUpdate(
      { email },
      { $addToSet: { attendance: dates } }
    );
 
    if (!user) {
      const error = new Error("Invalid Email");
      error.statusCode = 404;
      throw error;
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      const error = new Error("Invalid Password");
      error.statusCode = 404;
      throw error;
    }
    const token = await JWT.sign({ _id: user._id }, "SECRETKEY", {
      expiresIn: "7d",
    });
    console.log(token);
    return res.send({
      success: true,
      message: "login successfully",
      token,
      user,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.testController = (req, res) => {
  res.send("Protected route");
};

