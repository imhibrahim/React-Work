
const  express = require("express");
const router= express.Router();
const loginController=require("../controller/login.controller");
const UsersSchema=require("../model/users.model");

//get
router.post("/",(req,res)=>{
loginController.loginFunc(req,res,UsersSchema)
});






module.exports=router;




