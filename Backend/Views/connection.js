const mongoose=require('mongoose');

async function connectMongoDb(url){
    return mongoose.connect(url).then( ()=>{
        console.log("MongoDB connected")
    }
    )
}

module.exports={
    connectMongoDb,
}