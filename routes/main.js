const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");


//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/left-sidebar", homeController.getLeftSidebar);
router.get("/no-sidebar", homeController.getNoSidebar);
router.get("/right-sidebar", homeController.getRightSidebar);
router.get("/two-sidebar", homeController.getTwoSidebar);




module.exports = router;