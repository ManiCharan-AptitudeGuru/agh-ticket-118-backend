const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const affiliateRoutes = require("./routes/affiliateRoutes");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", affiliateRoutes);
app.use("/api", productRoutes);

app.use(errorHandler);

module.exports = app;
