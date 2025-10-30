const dbServices=require('../services/db.service')
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginFunc=async(req,res,schema)=>{
try{
const {email,password}=req.body;
const query={
    email,
   password
}
const dbRes=await dbServices.findOneRecord(query,schema);
console.log(dbRes);
if(dbRes){

//jwt Web Token
const payload = {
        id: dbRes._id,
        email: dbRes.email
      };
 // 🔏 Step 2: Generate token (secret key koi hidden rakho .env me)
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "3h" });


    return res.status(200).json({
        massage:"Data Found",
        isLogged:true,
       Data: dbRes,
       JWTTOKEN:token,
       role: dbRes.role,
       fullname: dbRes.fullname,
       email: dbRes.email,
       amount:dbRes.balance
})
}
else{
    return res.status(401).json({
        massage:"Invalid Credentials...",
        isLogged:false,
      
})
}

}
catch(e){
    return res.status(500).json({
        massage:"Internal server error !",
        isLogged:false,
        Error:e

    })
}
}

module.exports={
    loginFunc
}