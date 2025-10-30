const mongo =require("mongoose");
const{Schema}=mongo;

const transectionSchema = new Schema({
  type: String,
  refrence: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

const usersSchema= new Schema({
    fullname:String,
    mobile:String,
    email:{
        type:String,
        unique:true,
    },
    password:String,
    profile:String,
    address:String,
    userType:String,
   balance: { type: Number, default: 5000 },
  transections: [transectionSchema],
    role:{
        type:String,
        default:"user"
    },
    isActive:{
        type:Boolean,
        default:false
    }
},{timestamps:true});


module.exports=mongo.model("user",usersSchema)