const dbServices=require('../services/db.service')


const loginFunc=async(req,res,schema)=>{
try{
const {email,password}=req.body;
const query={
    email
}
const dbRes=await dbServices.findOneRecord(query,schema);
console.log(dbRes);
// return res.status(200).json({
//         massage:"Data Found",
//         isLogged:true,
//        Data: dbRes
// })
if(dbRes){
    return res.status(200).json({
        massage:"Data Found",
        isLogged:true,
       Data: dbRes
})
}
else{
    return res.status(401).json({
        massage:"Invalid Credentials...",
        isLogged:false,
      
})
}
}
catch(e){
    return res.status(500).json({
        massage:"Internal server error !",
        isLogged:false,
        Error:e

    })
}
}

module.exports={
    loginFunc
}