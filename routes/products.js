const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");




router.get("/", productsController.getProducts);
router.get("/productPage/:id", productsController.getProductPage); 

//router.get("/products/:type", ensureAuth, productsController.getMale); 


module.exports = router;