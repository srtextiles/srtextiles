const express = require("express");
const imageController = require("../controller/imageController");
const router = express.Router();
router.route("/images/script").get(imageController.script);
router.route("/images/:image").get(imageController.image);

module.exports = router;