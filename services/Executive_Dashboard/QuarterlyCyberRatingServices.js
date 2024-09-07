const QuarterlyCyberRatingServices = require("../../models/Executive_Dashboard/CyberRatingQuarterly");
const factory = require("../handlersFactory");

// @desc      Create QuarterlyCyberRatingServices
// @route     POST /api/cyber-rating
// @access    private
exports.createQuarterlyCyberRating = factory.create(
  QuarterlyCyberRatingServices
);

// @desc      Get Specific QuarterlyCyberRatingServices by id
// @route     GET /api/cyber-rating/:id
// @access    Public
exports.getQuarterlyCyberRating = factory.getOne(QuarterlyCyberRatingServices);

// @desc      Get List Of QuarterlyCyberRatingServices
// @route     GET /api/cyber-rating
// @access    Public
exports.getQuarterlyCyberRatings = factory.getAll(QuarterlyCyberRatingServices);

// @desc      Update QuarterlyCyberRatingServices
// @route     PATCH /api/cyber-rating/:id
// @access    private
exports.updateQuarterlyCyberRating = factory.updateOne(
  QuarterlyCyberRatingServices
);

// @desc      Delete QuarterlyCyberRatingServices
// @route     DELETE /api/cyber-rating/:id
// @access    private

exports.deleteQuarterlyCyberRating = factory.deleteOne(
  QuarterlyCyberRatingServices
);
