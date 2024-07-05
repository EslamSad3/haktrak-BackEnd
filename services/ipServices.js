const ip = require('../models/ipModel');
const factory = require('./handlersFactory');


// @desc      Create ip
// @route     POST /api/threat-intelligence/ips
// @access    private
exports.createip = factory.create(ip);

// @desc      Get Specific ip by id
// @route     GET /api/threat-intelligence/ips/:id
// @access    Public
exports.getip = factory.getOne(ip);

// @desc      Get List Of ips
// @route     GET /api/threat-intelligence/ips
// @access    Public
exports.getips = factory.getAll(ip);

// @desc      Update ip
// @route     PATCH /api/threat-intelligence/ips/:id
// @access    private
exports.updateip = factory.updateOne(ip);

// @desc      Delete ip
// @route     DELETE /api/threat-intelligence/ips/:id
// @access    private

exports.deleteip = factory.deleteOne(ip);
