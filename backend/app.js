const express=require("express");
const app=express();

app.use(express.json({limit:'39mb'}))
app.use(express.urlencoded({extended:true,limit:'10mb'}))

module.exports=app;