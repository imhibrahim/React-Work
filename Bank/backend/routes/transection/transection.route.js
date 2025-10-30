
const  express = require("express");
const router= express.Router();
const transectionController=require("../../controller/transection.controller");
const UsersSchema=require("../../model/users.model");

//get
router.post("/",(req,res)=>{
transectionController.transectionFunc(req,res,UsersSchema)
});






module.exports=router;




