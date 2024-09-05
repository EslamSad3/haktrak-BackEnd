const Monthlyincident = require("../../models/Reports/Monthlyincident");
const factory = require("../handlersFactory");

// @desc      Create Security Posture Score
// @route     POST /api/executive-dashboard/quarterly-incident
// @access    private
exports.createMonthlyincident = factory.create(Monthlyincident);

// @desc      Get Specific Security Posture Score by id
// @route     GET /api/executive-dashboard/quarterly-incident/:id
// @access    Public
exports.getMonthlyincident = factory.getOne(Monthlyincident);

// @desc      Get List Of Security Posture Score
// @route     GET /api/executive-dashboard/quarterly-incident
// @access    Public
exports.getMonthlyincidents = factory.getAll(Monthlyincident);

// @desc      Update Security Posture Score
// @route     PATCH /api/executive-dashboard/quarterly-incident/:id
// @access    private
exports.updateMonthlyincident = factory.updateOne(Monthlyincident);

// @desc      Delete Security Posture Score
// @route     DELETE /api/executive-dashboard/quarterly-incident/:id
// @access    private

exports.deleteMonthlyincident = factory.deleteOne(Monthlyincident);
