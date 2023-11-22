const express = require("express");
const {
  registerController,
  loginController,
  testController,
  getRegisterData,
  mongoFind,
} = require("../controller/authController");
const { requireSignin } = require("../middleware/authMiddleware");
const { userSchema } = require("../validations/userValidations");
const validation = require("../middleware/validationMiddleware");
const router = express.Router();

router.post("/register",validation(userSchema), registerController);
// router.get("/register", getRegisterData)

router.post("/login", validation(userSchema), loginController);

router.get("/test", requireSignin, testController);

// router.post("/mongofind", mongoFind)

module.exports = router;
