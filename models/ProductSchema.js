const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: String,
  date: Date,
  clicks: Number,
  conversions: Number,
  revenue: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };