const express = require("express")
const { registerController, loginController, testController, getRegisterData } = require("../controller/authController")
const { requireSignin, isAdmin } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/register", registerController)
// router.get("/register", getRegisterData)

router.post("/login", loginController)

router.get("/test",requireSignin, testController)

module.exports = router