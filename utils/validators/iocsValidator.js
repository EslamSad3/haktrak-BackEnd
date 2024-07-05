const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getIocValidator = [
  check("id").isMongoId().withMessage("Invalid Ioc ID Formate"),
  validatorMiddleWare,
];

exports.createIocValidator = [
  check("value").notEmpty().withMessage("Ioc value Required"),
  check("type").notEmpty().withMessage("Ioc type Required"),
  validatorMiddleWare,
];

exports.updateIocValidator = [
  check("id").isMongoId().withMessage("Invalid Ioc ID Formate"),
  validatorMiddleWare,
];

exports.deleteIocValidator = [
  check("id").isMongoId().withMessage("Invalid Ioc ID Formate"),
  validatorMiddleWare,
];
