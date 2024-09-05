const QuarterlyAttackTrendServices = require("../../models/Executive_Dashboard/AttackTrendQuarterly");
const factory = require("../handlersFactory");

// @desc      Create QuarterlyAttackTrendServices
// @route     POST /api/attack-trend
// @access    private
exports.createQuarterlyAttackTrendServices = factory.create(
  QuarterlyAttackTrendServices
);

// @desc      Get Specific QuarterlyAttackTrendServices by id
// @route     GET /api/attack-trend/:id
// @access    Public
exports.getQuarterlyAttackTrendService = factory.getOne(
  QuarterlyAttackTrendServices
);

// @desc      Get List Of QuarterlyAttackTrendServices
// @route     GET /api/attack-trend
// @access    Public
exports.getQuarterlyAttackTrendServices = factory.getAll(
  QuarterlyAttackTrendServices
);

// @desc      Update QuarterlyAttackTrendServices
// @route     PATCH /api/attack-trend/:id
// @access    private
exports.updateQuarterlyAttackTrendServices = factory.updateOne(
  QuarterlyAttackTrendServices
);

// @desc      Delete QuarterlyAttackTrendServices
// @route     DELETE /api/attack-trend/:id
// @access    private

exports.deleteQuarterlyAttackTrendServices = factory.deleteOne(
  QuarterlyAttackTrendServices
);
