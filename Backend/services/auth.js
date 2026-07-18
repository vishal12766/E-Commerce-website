const jwt = require('jsonwebtoken')
const secret="Vishal@123"

const setUser=(user)=>{
    return jwt.sign({
        id: user.id,
        email:user.email,
  },secret);
}

const getUser=(token)=>{
    if(!token) return null;
    return jwt.verify(token,secret);
}

module.exports={
    setUser,
    getUser
}