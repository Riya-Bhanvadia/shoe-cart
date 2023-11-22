const express = require("express");
const { confirmPwd } = require("../controller/confirmpwdController");
const router = express.Router();

router.post("/confirmPassword", confirmPwd)

module.exports = router
