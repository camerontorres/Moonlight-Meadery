require('dotenv').config();
const { MongoClient } = require('mongodb');
//const DB_STRING = process.env.DB_STRING;
const Products = require('../models/product');
const ObjectId = require('mongodb').ObjectId;

const express = require('express');
const app = express();

app.use(express.static('public'))




module.exports = {
  getProducts: async (req, res) => {
    try{
      const client = await MongoClient.connect('db-string', { useNewUrlParser: true });
      const db = client.db('test')
     const products = await db.collection('products').find().toArray()
      .then(result =>{
        
    res.render("products.ejs", {products: result}) });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving products from database.");
    }
  },

  getProductPage: async (req, res) => {
    try{
        
      const { id } = req.params
      if (!ObjectId.isValid(id)) {
        return res.status(404).send('Invalid product ID');
      }                               
      const product = await Products.findById(id);
      res.render('productPage.ejs', { product });            
      
                                                                                   
      
    }catch (err) {
      console.log(err);
      res.status(500).send("Error retrieving product from database.");
    }
  }
};