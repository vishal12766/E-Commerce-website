const mongoose = require('mongoose')

const CartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
})

const cartModel=new mongoose.model('CartModel',CartSchema,'Cart');

module.exports=cartModel;