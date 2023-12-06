const jwt = require("jsonwebtoken");
// const userModel = require("../model/userModel");

exports.requireSignin = (req, res, next) => {
  const bearerHeader = req.get("Authorization");
  // console.log(bearerHeader);
  console.log(req.headers["authorization"]);
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

exports.requireResetPwd = async (req, res, next) => {
  console.log("-----------");
  const vtoken = req.params.token;
  console.log(vtoken);
  // res.redirect("http://localhost:3000/confirmpwd")

  let verify;

  try {
    verify = jwt.verify(vtoken, "reset key");
    console.log(verify.email);
  } catch (error) {
    throw error;
  }
  if (verify) {
    console.log("reachedddddddddddd");
    return await res.redirect(`http://localhost:3000/confirmpwd/${vtoken}/${verify.email}`)
  } else {
    const error = new Error("jwt verification failed");
    throw error;
  }
};
