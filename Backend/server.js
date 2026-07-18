const express = require('express')
const product = require("./product.json")
const { default: mongoose, connect } = require('mongoose')
const { connectMongoDb } = require('./Views/connection')
const Flavors = require('./Model/IceCreamFlavors')
const User = require('./Model/User')
const cors=require("cors")
const userModel = require('./Model/User')
const {setUser,getUser} = require('./services/auth')
require("dotenv").config();


const app = express()

connectMongoDb(process.env.MONGO_URL || "mongodb://localhost:27017/IceCreamdatabase")
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

app.get('/',(req,res)=>{
  return res.send("hello")
})

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
        message:"server error",
        error: err
      })
    }
  console.log(req.body);
})



app.post('/login', async(req,res)=>{
  const {email,password}=req.body;
  const user=await User.findOne({email});
  if(user.password!==password){
    return res.json({
      msg:"Wrong password"
    })
  }
  if(user){
    const token = setUser(user);
    res.json({
      msg:"Login successful",
      token,
      user
    })
  }else{
    return res.json({
      msg:"User not found"
    })
  }
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});