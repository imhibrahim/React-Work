const multer=require("multer");
const path= require("path");
const storage=multer.diskStorage({

    destination:(req,file,cb)=>{
cb(null,"public/bankimages/",)
    },

    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }

});
const upload=multer({storage}).single("photo");



const uploadFile=(req,res)=>{

upload(req,res,(err)=>{
if(err){
    return res.status(400).json({error:err.massage})
}
if(!req.file){
    return res.status(400).json({Massage :"No File Uploaded....."})
}

res.status(200).json({
    massage:"File Uploaded Successfully",
    filepath:`bankimages/${req.file.filename}`
     })
})

}

//goto app.js file 



module.exports={
    uploadFile
}