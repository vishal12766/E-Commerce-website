const express = require('express')
const product = require("./product.json")
const { default: mongoose, connect } = require('mongoose')
const { connectMongoDb } = require('./Views/connection')
const Flavors = require('./Model/IceCreamFlavors')
const User = require('./Model/User')
const cors=require("cors")
const userModel = require('./Model/User')


const app = express()

connectMongoDb("mongodb://127.0.0.1:27017/IceCreamdatabase")
  .then(() => {
    console.log("Connected to:", mongoose.connection.name);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors())
app.use(express.json())

app.get("/api/product", async (req, res) => {
  const flavor = await Flavors.find();

  console.log(flavor);

  if (!flavor) {
    return res.json({ message: "No document found" });
  }

  res.json(flavor);
});

app.post('/signup', async(req,res)=>{
  try{
    const {name,email,password} =req.body
    const user=await User.create({
      name,
      email,
      password
    })
    res.status(201).json({
      message:"user created",
      user
    })
    }
    catch(err){
      console.log(err)
      res.status(500).json({
        message:"server error"
      })
    }
  console.log(req.body);
})

app.post('/login', async(req,res)=>{
  const {email,password}=req.body;
  const user=await User.findOne({email});
  if(!user){
    return res.json({
      msg:"User not found"
    })
  }

  if(user.password!==password){
    return res.json({
      msg:"Wrong password"
    })
  }

  res.json({
    msg:"Login successful",
    user
  })
})



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})