<<<<<<< HEAD:services/AttackTrendServices.js
const AttackTrend = require("../models/Executive_Dashboard/AttackTrend");
const factory = require("./handlersFactory");
=======
const AttackTrend = require("../../models/Reports/AttackTrend");
const factory = require("../handlersFactory");
>>>>>>> b406d9798a4e9cab0dd8e4053c42c69ae7f2da4a:services/Reports/AttackTrendServices.js

// @desc      Create AttackTrend
// @route     POST /api/attack-trend
// @access    private
exports.createAttackTrend = factory.create(AttackTrend);

// @desc      Get Specific AttackTrend by id
// @route     GET /api/attack-trend/:id
// @access    Public
exports.getAttackTrend = factory.getOne(AttackTrend);

// @desc      Get List Of AttackTrend
// @route     GET /api/attack-trend
// @access    Public
exports.getAttackTrends = factory.getAll(AttackTrend);

// @desc      Update AttackTrend
// @route     PATCH /api/attack-trend/:id
// @access    private
exports.updateAttackTrend = factory.updateOne(AttackTrend);

// @desc      Delete AttackTrend
// @route     DELETE /api/attack-trend/:id
// @access    private

exports.deleteAttackTrend = factory.deleteOne(AttackTrend);
