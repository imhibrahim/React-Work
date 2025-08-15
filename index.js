const express= require ('express');
const router = require('./router/RouterAuth');
 const app =express();

app.use("/api/auth",router);

 const Port=4500;
 app.listen(Port,()=>{
    console.log(`Server is running Port is : ${Port}`)
 })
