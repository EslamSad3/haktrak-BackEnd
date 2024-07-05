const threatActors = require("../models/threatActorsModel");
const factory = require("./handlersFactory");

// @desc      Create threatActors
// @route     POST /api/threat-intelligence/threatActorsRoute
// @access    private
exports.createthreatActors = factory.create(threatActors);

// @desc      Get Specific threatActors by id
// @route     GET /api/threat-intelligence/threatActorsRoute/:id
// @access    Public
exports.getthreatActor = factory.getOne(threatActors);

// @desc      Get List Of threatActors
// @route     GET /api/threat-intelligence/threatActorsRoute
// @access    Public
exports.getthreatActors = factory.getAll(threatActors);

// @desc      Update threatActors
// @route     PATCH /api/threat-intelligence/threatActorsRoute/:id
// @access    private
exports.updatethreatActor = factory.updateOne(threatActors);

// @desc      Delete threatActors
// @route     DELETE /api/threat-intelligence/threatActorsRoutes/:id
// @access    private

exports.deletethreatActor = factory.deleteOne(threatActors);
