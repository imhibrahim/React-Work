
const  express = require("express");
const router= express.Router();
const controller=require("../controller/controller");
const UsersSchema=require("../model/users.model");

//post
router.post("/",(req,res)=>{
controller.createData(req,res,UsersSchema)
});

//get
router.get("/",(req,res)=>{
controller.getdata(req,res,UsersSchema)
});

//delete
router.delete("/:id",(req,res)=>{
controller.deletdata(req,res,UsersSchema)
});







module.exports=router;




