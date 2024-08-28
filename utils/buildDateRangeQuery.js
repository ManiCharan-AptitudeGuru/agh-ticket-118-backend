const buildDateRangeQuery = (startDate, endDate) => {
  let dateQuery = {};
  if (startDate) dateQuery.$gte = new Date(startDate);
  if (endDate) dateQuery.$lte = new Date(endDate);
  return Object.keys(dateQuery).length > 0 ? { date: dateQuery } : {};
};

module.exports = buildDateRangeQuery;
