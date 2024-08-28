const express = require("express");
const cors = require("cors");
const { Affiliate } = require("./models/AffiliateSchema");
const { Product } = require("./models/ProductSchema");
const connectDB=require('./config/db')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

connectDB()

const buildDateRangeQuery = (startDate, endDate) => {
  let dateQuery = {};
  if (startDate) dateQuery.$gte = new Date(startDate);
  if (endDate) dateQuery.$lte = new Date(endDate);
  return Object.keys(dateQuery).length > 0 ? { date: dateQuery } : {};
};

app.get("/api/affiliate-performance", async (req, res) => {
  const { occupation, affiliate, startDate, endDate } = req.query;

  let query = buildDateRangeQuery(startDate, endDate);
  if (occupation && occupation !== "All") query.occupation = occupation;
  if (affiliate && affiliate !== "All") query.affiliate = affiliate;

  try {
    const data = await Affiliate.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching affiliate data", error });
  }
});

app.get("/api/product-performance", async (req, res) => {
  const { product, startDate, endDate } = req.query;

  let query = buildDateRangeQuery(startDate, endDate);
  if (product && product !== "All") query.product = product;

  try {
    const data = await Product.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product data", error });
  }
});

app.get("/api/occupations", async (req, res) => {
  try {
    const occupations = await Affiliate.distinct("occupation");
    res.json(occupations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching occupations", error });
  }
});

app.get("/api/affiliates", async (req, res) => {
  try {
    const affiliates = await Affiliate.distinct("affiliate");
    res.json(affiliates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching affiliates", error });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.distinct("product");
    res.json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error fetching products", error });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
