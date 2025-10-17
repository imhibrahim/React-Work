const mongo=require("mongoose");
const {Schema}=mongo;


const registerSchema=new Schema({
    name:String,
    mail:{
        type:String,
        unique:true
    },
     password:String,
     role:{
        default:"user",
        type:String
     }

},{timestamps:true})

module.exports=mongo.model("AllUsers",registerSchema)