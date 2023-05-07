
const { MongoClient } = require('mongodb');




const { get } = require('jquery');

//const {MongoClient } = require('mongodb')
const { db } = require('../models/product');



module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getInfo: (req, res) => {
    res.render("info.ejs");
  },
  getwhatIsMead: (req, res) => {
    res.render("whatIsMead.ejs");
  },
  getNoSidebar: (req, res) => {
    res.render("no-sidebar.ejs");
  },
  


  getabout: (req, res) => {
    res.render("about.ejs");
  },


catch (err) {
  console.log(err);},

 

}

 
