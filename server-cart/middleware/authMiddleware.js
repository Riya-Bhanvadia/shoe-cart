const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

exports.requireSignin = (req, res, next) => {
  const bearerHeader = req.get("Authorization");
  console.log(bearerHeader);
  if (!bearerHeader) {
    const error = new Error("No authorization header found");
    throw error;
  }
  // console.log(bearerHeader);
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    let verify;

    try {
      verify = jwt.verify(bearerToken, "SECRETKEY");
    } catch (error) {
      throw error;
    }
    if (verify) {
      req.token = bearerToken;
      next();
    } else {
      const error = new Error("jwt verification failed");
      throw error;
    }
  } 
};

exports.isAdmin = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      res.status(401).send({
        success: false,
        message: "Not the admin",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({ success: false });
  }
};
