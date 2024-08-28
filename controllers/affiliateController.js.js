const { Affiliate } = require("../models/AffiliateSchema");
const buildDateRangeQuery = require("../utils/buildDateRangeQuery");

const getAffiliatePerformance = async (req, res) => {
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
};

const getOccupations = async (req, res) => {
  try {
    const occupations = await Affiliate.distinct("occupation");
    res.json(occupations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching occupations", error });
  }
};

const getAffiliates = async (req, res) => {
  try {
    const affiliates = await Affiliate.distinct("affiliate");
    res.json(affiliates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching affiliates", error });
  }
};

module.exports = {
  getAffiliatePerformance,
  getOccupations,
  getAffiliates,
};
