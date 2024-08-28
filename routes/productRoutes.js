const express = require("express");
const {
  getProductPerformance,
  getProducts,
} = require("../controllers/productController");

const router = express.Router();

router.get("/product-performance", getProductPerformance);
router.get("/products", getProducts);

module.exports = router;
