const express=require("express");
const router=express.Router();
const uploadcontroller=require("../controller/upload.controller")


router.post('/',uploadcontroller.uploadFile);


module.exports=router