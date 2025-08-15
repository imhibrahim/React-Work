const home=async (req,res)=>{
try{

    res.status(200).send("<h1>this is Home page using ROUTER </h1>");
}
catch(e){
    console.log(`Error : ${e};
    }`)
}
}

const about=async (req,res)=>{
try{

    res.status(200).send("<h1>this is about page using ROUTER </h1>");
}
catch(e){
    console.log(`Error : ${e};
    }`)
}
}


module.exports={home,about};