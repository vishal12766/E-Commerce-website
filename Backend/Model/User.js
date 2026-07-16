const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const userModel=new mongoose.model('UserModel',UserSchema,'UserCollection');

module.exports=userModel;