
const { MongoClient } = require('mongodb');



module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getInfo: (req, res) => {
    res.render("info.ejs");
  },


catch (err) {
  console.log(err);},

 

}

 
