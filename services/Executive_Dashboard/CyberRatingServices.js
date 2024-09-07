const CyberRating = require("../../models/Executive_Dashboard/QuarterlyCyberRating");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/executive-dashboard/cyber-resilience-time
// @access    private
exports.createCyberRating = factory.create(CyberRating);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getCyberRating = factory.getOne(CyberRating);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getCyberRatings = factory.getAll(CyberRating);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateCyberRating = factory.updateOne(CyberRating);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteCyberRating = factory.deleteOne(CyberRating);
