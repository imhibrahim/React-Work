const express=require("express");
const uploadcontroller=require("../controller/upload.controller")
const router=express.Router()

 
router.post("/",uploadcontroller.uploadfile)

    module.exports=router
