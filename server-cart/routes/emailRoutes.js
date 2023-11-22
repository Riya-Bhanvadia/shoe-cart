const express = require("express");
const { sendResetMail } = require("../controller/sendResetEmail");
const { requireResetPwd } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/sendmail", sendResetMail);
router.get("/resetpwd/:token",requireResetPwd )

module.exports = router;
