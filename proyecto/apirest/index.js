const express=require("express");

const app=express();
const port=3001;
app.listen(port,()=>{
    console.log("servidor ejecutado en el puerto 3001")
});
