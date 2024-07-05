const aptsFeeds = require("../models/aptsFeedsModel");
const factory = require("./handlersFactory");

// @desc      Create aptsFeeds
// @route     POST /api/threat-intelligence/aptsFeedsRoute
// @access    private
exports.createAptFeed = factory.create(aptsFeeds);

// @desc      Get Specific aptsFeeds by id
// @route     GET /api/threat-intelligence/aptsFeedsRoute/:id
// @access    Public
exports.getAptFeeds = factory.getOne(aptsFeeds);

// @desc      Get List Of aptsFeeds
// @route     GET /api/threat-intelligence/aptsFeedsRoute
// @access    Public
exports.getAptsFeeds = factory.getAll(aptsFeeds);

// @desc      Update aptsFeeds
// @route     PATCH /api/threat-intelligence/aptsFeedsRoute/:id
// @access    private
exports.updateAptFeed = factory.updateOne(aptsFeeds);

// @desc      Delete aptsFeeds
// @route     DELETE /api/threat-intelligence/aptsFeedsRoutes/:id
// @access    private

exports.deleteAptFeed = factory.deleteOne(aptsFeeds);
