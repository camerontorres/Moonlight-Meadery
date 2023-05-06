
const { MongoClient } = require('mongodb');




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
  getRightSidebar: (req, res) => {
    res.render("right-sidebar.ejs");
  },
  getTwoSidebar: (req, res) => {
    res.render("two-sidebar.ejs");
  },


catch (err) {
  console.log(err);},

 

}

 
