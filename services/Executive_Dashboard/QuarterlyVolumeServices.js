const QuarterlyVolume = require("../../models/Executive_Dashboard/QuarterlyVolume");
const factory = require("../handlersFactory");

// @desc      Create QuarterlyVolume
// @route     POST /api/quarterly-volume
// @access    private
exports.createQuarterlyVolume = factory.create(QuarterlyVolume);

// @desc      Get Specific QuarterlyVolume by id
// @route     GET /api/quarterly-volume/:id
// @access    Public
exports.getQuarterlyVolume = factory.getOne(QuarterlyVolume);

// @desc      Get List Of QuarterlyVolume
// @route     GET /api/quarterly-volume
// @access    Public
exports.getQuarterlyVolumes = factory.getAll(QuarterlyVolume);

// @desc      Update QuarterlyVolume
// @route     PATCH /api/quarterly-volume/:id
// @access    private
exports.updateQuarterlyVolume = factory.updateOne(QuarterlyVolume);

// @desc      Delete QuarterlyVolume
// @route     DELETE /api/quarterly-volume/:id
// @access    private

exports.deleteQuarterlyVolume = factory.deleteOne(QuarterlyVolume);
