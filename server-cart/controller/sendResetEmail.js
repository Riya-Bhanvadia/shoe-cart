const nodemailer = require("nodemailer");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.sendResetMail = async (req, res, next) => {
  const { email } = req.body;
  // console.log(req.body);
  try {
    const olduser = await User.findOne({ email });
    // console.log(olduser);
    if (!olduser) {
      const error = new Error("user not exists");
      error.statusCode = 404;
      // console.log(error);
      throw error;
    }
    const token = jwt.sign({ email: olduser.email }, "reset key", {
      expiresIn: "1h",
    });
    console.log(token);
    const link = `http://localhost:8080/resetpwd/${token}`;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.RESET_EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM, // sender address
      to: email, // list of receivers
      subject: "Reset Password Verification", // Subject line
      text: "Hello world?", // plain text body
      html: `<h2>Hello, welcome to shoecart</h2><br><p>Click <a href=${link}> here to reset password</a></p>`, // html body
    });

    // console.log(info.messageId);
    res.json(info.messageId);
    return res.json("Success");
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};
