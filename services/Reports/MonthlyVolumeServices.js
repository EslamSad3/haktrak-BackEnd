<<<<<<< HEAD:services/MonthlyVolumeServices.js
const MonthlyVolume = require("../models/Executive_Dashboard/QuarterlyVolume");
const factory = require("./handlersFactory");
=======
const MonthlyVolume = require("../../models/Reports/MonthlyVolume");
const factory = require("../handlersFactory");
>>>>>>> b406d9798a4e9cab0dd8e4053c42c69ae7f2da4a:services/Reports/MonthlyVolumeServices.js

// @desc      Create MonthlyVolume
// @route     POST /api/monthly-volume
// @access    private
exports.createMonthlyVolume = factory.create(MonthlyVolume);

// @desc      Get Specific MonthlyVolume by id
// @route     GET /api/monthly-volume/:id
// @access    Public
exports.getMonthlyVolume = factory.getOne(MonthlyVolume);

// @desc      Get List Of MonthlyVolume
// @route     GET /api/monthly-volume
// @access    Public
exports.getMonthlyVolumes = factory.getAll(MonthlyVolume);

// @desc      Update MonthlyVolume
// @route     PATCH /api/monthly-volume/:id
// @access    private
exports.updateMonthlyVolume = factory.updateOne(MonthlyVolume);

// @desc      Delete MonthlyVolume
// @route     DELETE /api/monthly-volume/:id
// @access    private

exports.deleteMonthlyVolume = factory.deleteOne(MonthlyVolume);
