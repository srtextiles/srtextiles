const express = require("express");
const databaseController = require("../controller/databaseController");
const router = express.Router();
router.route("/subscribeus").get(databaseController.subscribeus);
router.route("/reviews").get(databaseController.reviews);
router.route("/buyProducts").get(databaseController.buyProducts);
router.route("/purchase").post(databaseController.purchase);
module.exports = router;