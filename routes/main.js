const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");
const productRoutes = require("../routes/products")
router.use("/products", productRoutes);



//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/whatIsMead", homeController.getwhatIsMead);
router.get("/no-sidebar", homeController.getNoSidebar);
//router.get("/products", homeController.getproducts);
router.get("/about", homeController.getabout);




module.exports = router;