
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


router.delete("/:id",(req,res)=>{
controller.deletedata(req,res,UsersSchema)
});


//update
router.put("/:id", (req, res) => {
  controller.updatedata(req, res, UsersSchema);
});






module.exports=router;




