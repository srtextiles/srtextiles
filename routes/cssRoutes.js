const express = require("express");
const cssController = require("../controller/cssController");
const router = express.Router();
router.route("/css/utilities.css").get(cssController.utilities);
router.route("/css/style.css").get(cssController.style);
router.route("/css/style2.css").get(cssController.style2);
router.route("/css1/style.css").get(cssController.style1);
router.route("/css1/demo.css").get(cssController.demo);
module.exports = router;