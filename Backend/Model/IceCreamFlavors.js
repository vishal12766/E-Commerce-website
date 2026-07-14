const { default: mongoose, Schema } = require("mongoose");

const IceCreamFlavorsSchema=new mongoose.Schema({},{strict:false})
const Flavors=new mongoose.model("flavor",IceCreamFlavorsSchema,"ProductCollection");


module.exports=Flavors;