const express = require("express")
const app=express()
const port=2000

app.get("/",(req,res)=>{
    res.send("helloworld")
})

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
})

app.listen(process.env.PORT || port ,()=>{
    console.log("Online")
})