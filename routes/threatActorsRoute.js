const express = require("express");
const auth = require("../services/authServices");
const {
  createthreatActors,
  getthreatActors,
  getthreatActor,
  updatethreatActor,
  deletethreatActor,
} = require("../services/threatActorsServices");
const {
  getthreatActorsValidator,
  createthreatActorsValidator,
  updatethreatActorValidator,
  deletethreatActorValidator,
} = require("../utils/validators/threatActorsValidator");

const router = express.Router();

router.route("/").get(getthreatActors);
router.route("/:id").get(getthreatActorsValidator, getthreatActor);

router.use(auth.protect, auth.allowedTo("admin"));

router.route("/").post(createthreatActorsValidator, createthreatActors);
router
  .route("/:id")
  .patch(updatethreatActorValidator, updatethreatActor)
  .delete(deletethreatActorValidator, deletethreatActor);
module.exports = router;
