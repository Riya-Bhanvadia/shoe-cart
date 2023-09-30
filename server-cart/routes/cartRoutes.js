const express = require("express")
const { updateCart, makePayment } = require("../controller/cartController")
const router = express.Router()

router.post("/updateCart", updateCart)
router.post("/payment", makePayment)

module.exports = router