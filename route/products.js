// this router file acts as a middleware

const productController = require("../controller/products");
const express = require('express')
const cors = require('cors')
const router = express.Router()

router.get('/products', productController.findAll)
router.get('/product-search', productController.searchProducts)

module.exports = router;

