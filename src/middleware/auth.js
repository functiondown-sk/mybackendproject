const userModel = require("../models/userModel.js")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')


const authenticate = async function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers['x-auth-token'];
    // if (!token) token = req.headers["x-auth-token"];
      if (!token){
      return res.send({ status: false, msg: "token must be present" });
      }
      console.log(token);
     try {
      let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
      console.log(decodedToken)
      }
     catch(error){
      return res.status(400).send({ status: false, key: error.message});
     }
      
      let userId = req.params.userId;
      console.log(userId)
      let userDetails = await userModel.findById(userId);
      if (!userDetails){
        return res.send({ status: false, msg: "No such user exists" });
      }


      var valid = mongoose.Types.ObjectId.isValid(userId)
      if(!valid){
        return res.status(400).send("UserId is Invalid")
      }
    next()
}


const authorise = async function(req, res, next) {
    let token = req.headers['x-auth-token'];
    // comapre the logged in user's id and the id in request
    let userId = req.params.userId
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if(decodedToken.userId.toString() != userId){
      return res.status(403).send({message: "You are not authorised"})
    }
    
    next()
}

module.exports. authenticate =  authenticate  ;
module.exports. authorise  = authorise  ;

// let token = req.headers["x-Auth-token"];
// if (!token)
// {return res.send({ status: false, msg: "token must be present" })};

// next()