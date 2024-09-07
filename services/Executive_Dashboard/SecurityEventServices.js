const SecurityEvent = require("../../models/Executive_Dashboard/SecurityEvent");
const factory = require("../handlersFactory");

// @desc      Create Non Compliance Gaps Overview
// @route     POST /api/executive-dashboard/security-breach-indicators
// @access    private
exports.createSecurityEvent = factory.create(SecurityEvent);

// @desc      Get Specific Non Compliance Gaps Overview by id
// @route     GET /api/executive-dashboard/security-breach-indicators/:id
// @access    Public
exports.getSecurityEvent = factory.getOne(SecurityEvent);

// @desc      Get List Of Non Compliance Gaps Overview
// @route     GET /api/executive-dashboard/security-breach-indicators
// @access    Public
exports.getSecurityEvents = factory.getAll(SecurityEvent);

// @desc      Update Non Compliance Gaps Overview
// @route     PATCH /api/executive-dashboard/security-breach-indicators/:id
// @access    private
exports.updateSecurityEvent = factory.updateOne(SecurityEvent);

// @desc      Delete Non Compliance Gaps Overview
// @route     DELETE /api/executive-dashboard/security-breach-indicators/:id
// @access    private

exports.deleteSecurityEvent = factory.deleteOne(SecurityEvent);
