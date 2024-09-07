const QuarterlyVolume = require("../../models/Executive_Dashboard/QuarterlyVolume");
const factory = require("../handlersFactory");

// @desc      Create Cyber Resilience Time
// @route     POST /api/executive-dashboard/cyber-resilience-time
// @access    private
exports.createQuarterlyVolume = factory.create(QuarterlyVolume);

// @desc      Get Specific Cyber Resilience Time by id
// @route     GET /api/executive-dashboard/cyber-resilience-time/:id
// @access    Public
exports.getQuarterlyVolume = factory.getOne(QuarterlyVolume);

// @desc      Get List Of Cyber Resilience Time
// @route     GET /api/executive-dashboard/cyber-resilience-time
// @access    Public
exports.getQuarterlyVolumes = factory.getAll(QuarterlyVolume);

// @desc      Update Cyber Resilience Time
// @route     PATCH /api/executive-dashboard/cyber-resilience-time/:id
// @access    private
exports.updateQuarterlyVolume = factory.updateOne(QuarterlyVolume);

// @desc      Delete Cyber Resilience Time
// @route     DELETE /api/executive-dashboard/cyber-resilience-time/:id
// @access    private

exports.deleteQuarterlyVolume = factory.deleteOne(QuarterlyVolume);
