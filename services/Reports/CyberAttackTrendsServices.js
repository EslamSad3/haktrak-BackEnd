<<<<<<< HEAD:services/CyberAttackTrendsServices.js
const CyberAttackTrends = require("../models/Executive_Dashboard/CyberAttackTrends");
const factory = require("./handlersFactory");
=======
const CyberAttackTrends = require("../../models/Reports/CyberAttackTrends");
const factory = require("../handlersFactory");
>>>>>>> b406d9798a4e9cab0dd8e4053c42c69ae7f2da4a:services/Reports/CyberAttackTrendsServices.js

// @desc      Create CyberAttackTrends
// @route     POST /api/cyber-attack-trends
// @access    private
exports.createCyberAttackTrends = factory.create(CyberAttackTrends);

// @desc      Get Specific CyberAttackTrends by id
// @route     GET /api/cyber-attack-trends/:id
// @access    Public
exports.getCyberAttackTrend = factory.getOne(CyberAttackTrends);

// @desc      Get List Of CyberAttackTrends
// @route     GET /api/cyber-attack-trends
// @access    Public
exports.getCyberAttackTrends = factory.getAll(CyberAttackTrends);

// @desc      Update CyberAttackTrends
// @route     PATCH /api/cyber-attack-trends/:id
// @access    private
exports.updateCyberAttackTrends = factory.updateOne(CyberAttackTrends);

// @desc      Delete CyberAttackTrends
// @route     DELETE /api/cyber-attack-trends/:id
// @access    private

exports.deleteCyberAttackTrends = factory.deleteOne(CyberAttackTrends);
