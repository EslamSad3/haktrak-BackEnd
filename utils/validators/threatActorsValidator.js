const { check } = require("express-validator");
const validatorMiddleWare = require("../../middlewares/validatorMiddleWare");

exports.getthreatActorsValidator = [
  check("id").isMongoId().withMessage("Invalid threatActors ID Formate"),
  validatorMiddleWare,
];

exports.createthreatActorsValidator = [
  check("groupeName").notEmpty().withMessage("Apt groupe Name Required"),
  check("source").notEmpty().withMessage("Apt Feeds source Required"),
  validatorMiddleWare,
];

exports.updatethreatActorValidator = [
  check("id").isMongoId().withMessage("Invalid threatActors ID Formate"),
  validatorMiddleWare,
];

exports.deletethreatActorValidator = [
  check("id").isMongoId().withMessage("Invalid threatActors ID Formate"),
  validatorMiddleWare,
];
