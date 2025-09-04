const  express = require("express");
const router= express.Router();
const controller=require("../controller/controller")
const usersSchema =require("../Model/Users.model")

//first attend
// router.post('/',(req,res)=>{
//     res.status(200).json({
//         massage:"Users Requested"
//     })
// })
 
//second attend
router.post('/',(req,res)=>{
 controller.creatData(req,res,usersSchema);
})


module.exports=router;