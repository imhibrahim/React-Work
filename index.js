const express= require ('express');
const router = require('./router/RouterAuth');
const connectDb = require('./utils/db');
 const app =express();
 app.use(express.json());


app.use("/api/auth",router);

 const Port=4500;
connectDb().then(()=>{



 app.listen(Port,()=>{
    console.log(`Server is running Port is : ${Port}`)
 })

 })