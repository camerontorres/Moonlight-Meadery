const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  
  caption: {
    type: String,
    
  },
  

  
  
});

module.exports = mongoose.model("Products", productSchema);
