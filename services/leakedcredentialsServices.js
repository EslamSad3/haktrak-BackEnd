const leakedcredentials = require("../models/leakedcredentialsModel");
const factory = require("./handlersFactory");

// @desc      Create leakedcredentials
// @route     POST /api/leakedcredentialss
// @access    private
exports.createleakedcredentials = factory.create(leakedcredentials);

// @desc      Get Specific leakedcredentials by id
// @route     GET /api/leakedcredentialss/:id
// @access    Public
exports.getleakedcredentials = factory.getOne(leakedcredentials);

// @desc      Get List Of leakedcredentialss
// @route     GET /api/leakedcredentialss
// @access    Public
exports.getAllleakedcredentials = factory.getAll(leakedcredentials);

// @desc      Update leakedcredentials
// @route     PATCH /api/leakedcredentialss/:id
// @access    private
exports.updateleakedcredentials = factory.updateOne(leakedcredentials);

// @desc      Delete leakedcredentials
// @route     DELETE /api/leakedcredentials/:id
// @access    private

exports.deleteleakedcredentials = factory.deleteOne(leakedcredentials);
