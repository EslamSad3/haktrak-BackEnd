const express = require("express");
const auth = require("../../services/authServices");
const {
  createSecurityBreachIndicators,
  getSecurityBreachIndicatorss,
  getSecurityBreachIndicators,
  updateSecurityBreachIndicators,
  deleteSecurityBreachIndicators,
} = require("../../services/Reports/SecurityBreachIndicatorsServices");

const router = express.Router();

router.use(auth.protect);

router.use(auth.allowedTo("admin", "user", "soc", "executive"));
router.route("/").get(getSecurityBreachIndicatorss);

router.use(auth.protect, auth.allowedTo("admin"));
router.route("/:id").get(getSecurityBreachIndicators);
router.route("/").post(createSecurityBreachIndicators);
router
  .route("/:id")
  .patch(updateSecurityBreachIndicators)
  .delete(deleteSecurityBreachIndicators);
module.exports = router;
