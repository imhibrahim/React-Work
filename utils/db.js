const mongoose=require("mongoose");
const url="mongodb://127.0.0.1:27017/mern_project";

//mongoose.connect(uri);
const connectDb =async()=>{
try{
    await mongoose.connect(url);
    console.log("Connection Successfully ....")
}
catch(e){
console.error(`Connection Feiled..... Error :${e}`)
process.exit(0);
}
}
module.exports=connectDb