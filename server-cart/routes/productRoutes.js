const express = require("express")
const { createProduct, getCategory, getProducts, addProducts, findProducts, findCategoryAndAdd, addCategory } = require("../controller/productController")
const { requireSignin } = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/create-product", createProduct)
router.get("/getCategory", getCategory)
router.get("/products/:catid",getProducts )
router.get("/products",findProducts )
router.post("/addProducts", addProducts)
router.post("/findCategoryAndAdd", findCategoryAndAdd)
router.post("/addCategory", addCategory)
module.exports = router