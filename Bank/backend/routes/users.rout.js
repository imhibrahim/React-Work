// first time Hit API

// const  express = require("express");
// const router= express.Router();

// router.post("/",(req,res)=>{
// res.status(200).json({
// massage :"User Requested...." 
// })
// });

// module.exports=router;


// goto app.js file 



//Second Time Hit Api
const  express = require("express");
const router= express.Router();
const controller=require("../controller/controller");
const UsersSchema=require("../model/users.model");

router.post("/",(req,res)=>{
controller.createData(req,res,UsersSchema)
});


module.exports=router;




