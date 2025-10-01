const multer=require("multer");
const path=require("path");

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/bankimages/")
    },

    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
});


const upload=multer({storage}).single("photo");




const uploadfile=(req,res)=>{

upload(req,res,(err)=>{
    //error check start

if(err){
    return res.status(400).json({Error : err.massage})
}
if(!req.file){
    return res.status(400).json({Error : "No File Upload !"})
}
//error check end

res.status(200).json({
    massage:"Image Uploaded Successfully",
    filepath:`bankimages/${req.file.filename}`
});

})
}

module.exports={
    uploadfile
}