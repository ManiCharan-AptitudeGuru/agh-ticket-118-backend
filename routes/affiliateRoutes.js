const express = require("express");
const {
  getAffiliatePerformance,
  getOccupations,
  getAffiliates,
} = require("../controllers/affiliateController.js");

const router = express.Router();

router.get("/affiliate-performance", getAffiliatePerformance);
router.get("/occupations", getOccupations);
router.get("/affiliates", getAffiliates);

module.exports = router;
