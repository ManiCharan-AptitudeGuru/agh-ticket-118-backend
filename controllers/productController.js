const { Product } = require("../models/ProductSchema");
const buildDateRangeQuery = require("../utils/buildDateRangeQuery");

const getProductPerformance = async (req, res) => {
  const { product, startDate, endDate } = req.query;
  let query = buildDateRangeQuery(startDate, endDate);
  if (product && product !== "All") query.product = product;

  try {
    const data = await Product.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product data", error });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.distinct("product");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

module.exports = {
  getProductPerformance,
  getProducts,
};
