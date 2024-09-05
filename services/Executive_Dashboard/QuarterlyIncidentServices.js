const Quarterlyincident = require("../../models/Executive_Dashboard/Quarterlyincident");
const factory = require("../handlersFactory");

// @desc      Create Quarterly incident
// @route     POST /api/executive-dashboard/quarterly-incident
// @access    private
exports.createQuarterlyincident = factory.create(Quarterlyincident);

// @desc      Get Specific Quarterly incident by id
// @route     GET /api/executive-dashboard/quarterly-incident/:id
// @access    Public
exports.getQuarterlyincident = factory.getOne(Quarterlyincident);

// @desc      Get List Of Quarterly incident
// @route     GET /api/executive-dashboard/quarterly-incident
// @access    Public
exports.getQuarterlyincidents = factory.getAll(Quarterlyincident);

// @desc      Update Quarterly incident
// @route     PATCH /api/executive-dashboard/quarterly-incident/:id
// @access    private
exports.updateQuarterlyincident = factory.updateOne(Quarterlyincident);

// @desc      Delete Quarterly incident
// @route     DELETE /api/executive-dashboard/quarterly-incident/:id
// @access    private

exports.deleteQuarterlyincident = factory.deleteOne(Quarterlyincident);
