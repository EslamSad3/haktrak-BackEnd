const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const AttackSurface = require("../models/AttackSurface");
const factory = require("./handlersFactory");
// const { uploadMixOfFiles } = require("../middlewares/uploadImagesMiddleWare");

// exports.uploadProductImages = uploadMixOfFiles([
//   {
//     name: "screenshot",
//     maxCount: 1,
//   },
//   { name: "screenshots", maxCount: 4 },
// ]);

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/screenshots");
  },

  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `AttackSurface-screenshot-${Date.now()}-${uuidv4()}.${ext}`;
    req.body.screenshot = fileName;
    cb(null, fileName);
  },
});

const multerFilter = function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new ApiError("Only Images allowed", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
exports.uploadScreenshot = upload.single("screenshot");
// @desc      Create AttackSurface
// @route     POST /api/attack-surface
// @access    private
exports.createAttackSurface = factory.create(AttackSurface);

// @desc      Get Specific AttackSurface by id
// @route     GET /api/attack-surface/:id
// @access    Public
exports.getAttackSurface = factory.getOne(AttackSurface);

// @desc      Get List Of AttackSurface
// @route     GET /api/attack-surface
// @access    Public
exports.getAttackSurfaces = factory.getAll(AttackSurface);

// @desc      Update AttackSurface
// @route     PATCH /api/attack-surface/:id
// @access    private
exports.updateAttackSurface = factory.updateOne(AttackSurface);

// @desc      Delete AttackSurface
// @route     DELETE /api/attack-surface/:id
// @access    private

exports.deleteAttackSurface = factory.deleteOne(AttackSurface);
