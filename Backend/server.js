const express = require('express')
const product = require("./product.json")
const { default: mongoose, connect } = require('mongoose')
const { connectMongoDb } = require('./Views/connection')
const Flavors = require('./Model/IceCreamFlavors')
const cors=require("cors")


const app = express()

connectMongoDb("mongodb://127.0.0.1:27017/IceCreamdatabase")
  .then(() => {
    console.log("Connected to:", mongoose.connection.name);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors())

app.get("/api/product", async (req, res) => {
  const flavor = await Flavors.find();

  console.log(flavor);

  if (!flavor) {
    return res.json({ message: "No document found" });
  }

  res.json(flavor);
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})