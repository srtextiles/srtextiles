const express = require("express");
const pageController = require("../controller/pageController");
const router = express.Router();

router.route("/").get((req,res)=>{
    res.send("hello heruko");
});
// router.route("/about").get(pageController.about);
// router.route("/services").get(pageController.services);
// router.route("/product").get(pageController.product);
// router.route("/contact").get(pageController.contact);
// router.route("/wholesale").get(pageController.wholesale);
// router.route("/features").get(pageController.features);
// router.route("/sarees").get(pageController.sarees);
// router.route("/dhotis").get(pageController.dhotis);
// router.route("/mats").get(pageController.mats);
// router.route("/curtains").get(pageController.curtains);
// router.route("/buynow").get(pageController.buynow);
// router.route("/rugs").get(pageController.rugs);
// router.route("/towels").get(pageController.towels);
// router.route("/docs").get(pageController.docs);
// router.route("/bedsheets").get(pageController.bedsheets);
// router.route("/kerchiefs").get(pageController.kerchiefs);
module.exports = router;