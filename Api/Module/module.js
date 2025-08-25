const home=async (req,res)=>{
try{

    res.status(200).send("<h1>this is Home page using ROUTER </h1>");
}
catch(e){
     res.status(400).send("<h1>this is Home page using ROUTER </h1>");
    console.log(`Error : ${e};
    }`)
}
}

const about=async (req,res)=>{
try{
console.log(req.body)
    res.status(200).send({msg:req.body});
}
catch(e){
    console.log(`Error : ${e};
    }`)
}
}


module.exports={home,about};