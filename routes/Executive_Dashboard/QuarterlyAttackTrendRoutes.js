const express = require("express");
const auth = require("../../services/authServices");
const {
  createQuarterlyAttackTrendServices,
  getQuarterlyAttackTrendService,
  getQuarterlyAttackTrendServices,
  updateQuarterlyAttackTrendServices,
  deleteQuarterlyAttackTrendServices,
} = require("../../services/Executive_Dashboard/QuarterlyAttackTrendServices");

const router = express.Router();

router.route("/").get(getQuarterlyAttackTrendServices);
router.route("/:id").get(getQuarterlyAttackTrendService);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createQuarterlyAttackTrendServices);
router
  .route("/:id")
  .patch(updateQuarterlyAttackTrendServices)
  .delete(deleteQuarterlyAttackTrendServices);
module.exports = router;
