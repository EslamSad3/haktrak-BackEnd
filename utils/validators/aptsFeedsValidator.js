const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getAptFeedValidator = [
  check("id").isMongoId().withMessage("Invalid AptFeed ID Formate"),
  validatorMiddleWare,
];

exports.createAptFeedValidator = [
  check("groupeName").notEmpty().withMessage("Apt groupe Name Required"),
  check("source").notEmpty().withMessage("Apt Feeds source Required"),
  validatorMiddleWare,
];

exports.updateAptFeedValidator = [
  check("id").isMongoId().withMessage("Invalid AptFeed ID Formate"),
  validatorMiddleWare,
];

exports.deleteAptFeedValidator = [
  check("id").isMongoId().withMessage("Invalid AptFeed ID Formate"),
  validatorMiddleWare,
];
