const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
          title: { type: String,
          minlength: [2, "First name must be at least 6 characters long"] , 
           required: [true, "Product title is required"]
     },
          price: { type: Number,
          min: [0, "Set a minimum price"],
    },
          description : {
          type: String,
          minlength: [5, "A description must be at least 6 characters long"]
        }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);