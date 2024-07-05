const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getipValidator = [
  check("id").isMongoId().withMessage("Invalid ip ID Formate"),
  validatorMiddleWare,
];

exports.createipValidator = [
  check("value").notEmpty().withMessage("ip address Required"),
  check("port").notEmpty().withMessage("ip port Required"),
  validatorMiddleWare,
];

exports.updateipValidator = [
  check("id").isMongoId().withMessage("Invalid ip ID Formate"),
  check("value").optional(),
  validatorMiddleWare,
];

exports.deleteipValidator = [
  check("id").isMongoId().withMessage("Invalid ip ID Formate"),
  validatorMiddleWare,
];
