const { hashPassword } = require("../helpers/authHelper");
const User = require("../model/userModel");


exports.confirmPwd = async (req, res, next) => {
  const { email, pwd } = req.body;
  // console.log(pwd);
  const hashedPassword = await hashPassword(pwd);
  try {
    const result = await User.findOneAndUpdate(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};
