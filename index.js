const express = require("express")
const mongoose = require("mongoose")
const app=express()
const port=2000

app.get("/",(req,res)=>{
    res.send("helloworld")
})

mongoose.connect("mongodb+srv://user:pass@cluster0.kshzx.mongodb.net/etark?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.listen(process.env.PORT || port ,()=>{
    console.log("Online")
})