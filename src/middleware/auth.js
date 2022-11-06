const userModel = require("../models/userModel.js")
const jwt = require("jsonwebtoken");

const middleware1 = function (req, res, next){
  let token = req.headers["x-auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
    if (!token){
    return res.send({ status: false, msg: "token must be present" });
    }
    next()
}
const middleware2 =  function  (req,res,next) {
  let token = req.headers["x-auth-token"];
  // if (!token) token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  console.log(decodedToken)
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  }
  next()
}


const middleware3 = async function(req,res,next){
  let userId = req.params.userId;
  console.log(userId)
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
     return res.send({ status: false, msg: "No such user exists" });
  }
  next() 
}

module.exports. middleware1  =  middleware1  ;
module.exports. middleware2  = middleware2  ;
module.exports. middleware3  = middleware3  ;

// let token = req.headers["x-Auth-token"];
// if (!token)
// {return res.send({ status: false, msg: "token must be present" })};

// next()