<<<<<<< HEAD:services/CyberRatingServices.js
const CyberRating = require("../models/Executive_Dashboard/CyberRating");
const factory = require("./handlersFactory");
=======
const CyberRating = require("../../models/Reports/CyberRating");
const factory = require("../handlersFactory");
>>>>>>> b406d9798a4e9cab0dd8e4053c42c69ae7f2da4a:services/Reports/CyberRatingServices.js

// @desc      Create CyberRating
// @route     POST /api/cyber-rating
// @access    private
exports.createCyberRating = factory.create(CyberRating);

// @desc      Get Specific CyberRating by id
// @route     GET /api/cyber-rating/:id
// @access    Public
exports.getCyberRating = factory.getOne(CyberRating);

// @desc      Get List Of CyberRating
// @route     GET /api/cyber-rating
// @access    Public
exports.getCyberRatings = factory.getAll(CyberRating);

// @desc      Update CyberRating
// @route     PATCH /api/cyber-rating/:id
// @access    private
exports.updateCyberRating = factory.updateOne(CyberRating);

// @desc      Delete CyberRating
// @route     DELETE /api/cyber-rating/:id
// @access    private

exports.deleteCyberRating = factory.deleteOne(CyberRating);
