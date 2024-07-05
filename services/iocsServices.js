const iocs = require("../models/iocsModel");
const factory = require("./handlersFactory");

// @desc      Create iocs
// @route     POST /api/threat-intelligence/iocsRoute
// @access    private
exports.createIoc = factory.create(iocs);

// @desc      Get Specific iocs by id
// @route     GET /api/threat-intelligence/iocsRoute/:id
// @access    Public
exports.getIoc = factory.getOne(iocs);

// @desc      Get List Of iocs
// @route     GET /api/threat-intelligence/iocsRoute
// @access    Public
exports.getIocs = factory.getAll(iocs);

// @desc      Update ioc
// @route     PATCH /api/threat-intelligence/iocsRoute/:id
// @access    private
exports.updateIoc = factory.updateOne(iocs);

// @desc      Delete iocs
// @route     DELETE /api/threat-intelligence/iocsRoutes/:id
// @access    private

exports.deleteIoc = factory.deleteOne(iocs);
