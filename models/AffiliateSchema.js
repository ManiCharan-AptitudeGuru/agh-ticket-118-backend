const mongoose = require("mongoose");

const affiliateSchema = new mongoose.Schema({
  affiliate: String,
  date: Date,
  linksShared: Number,
  occupation: String,
  productsMarketed: [String],
});

const Affiliate = mongoose.model("Affiliate", affiliateSchema);

module.exports = { Affiliate};
