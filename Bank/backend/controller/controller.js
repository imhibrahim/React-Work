
const dbServices=require('../services/db.service')
const createData =async(req, res, schema) => {
  try {
    const data = req.body;
    console.log(data);
    const dbRes=await dbServices.createNewRecord(data,schema);
    res.status(200).json({
      message: "Data Insertes Successfully..",
      success:true,
      data: dbRes
    });
  } catch (error) {
    if(error.code===11000){
res.status(422).json({
      message: "Dublicate the your Email.....",
      error
    });
    }
    else{
        res.status(500).json({
      message: "Internal Server Error.....",
      error
    });
    }
  }
};



//get data controller

const getdata=async(req, res, schema)=>{
try{
  const dbRes=await dbServices.findAllRecord(schema);
  res.status(200).json({
    massage:"Record is Founded....",
    data :dbRes
  })
}
catch(e){
res.status(500).json({
  massage:"Internal Server Error",
  error:e
})  
}
}


//delete data
const deletdata=async(req, res, schema)=>{
try{
  const {id}=req.params;
  const dbRes=await dbServices.deleteRecord(id,schema);
  res.status(200).json({
    massage:"Record is Deleted....",
    data :dbRes
  })
}
catch(e){
res.status(500).json({
  massage:"Internal Server Error",
  error:e
})  
}
}


module.exports = { createData,getdata,deletdata};
