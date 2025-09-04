const dbservice=require("../Services/dbServices")

const creatData=async(req,res,schema)=>{
try{
     //first attemp
    // const data=req.body;
    // res.status(200).json({
    //     massage:"Data received",
    //     data
    // })
      //second attemp
       const data=req.body;
    const dbRes=await dbservice.CreateNewUser(data,schema)
    res.status(200).json({
        massage:"Data inserted ....",
        success:true,
        data:dbRes
    })

}

catch(error){
    if(error.code== 11000){
 res.status(422).json({
        massage:"Email Already Exists....",
        success:false,
        error
    })
  }
    

  else{
      res.status(500).json({
        massage:"Internal Server Error",
        error
    })
  }
}

}

module.exports={
    creatData
};