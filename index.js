const express = require("express")
const app=express()
const port=2000

app.get("/",(req,res)=>{
    res.send("helloworld")
})

app.listen(process.env.port || port ,()=>{
    console.log("Online")
})