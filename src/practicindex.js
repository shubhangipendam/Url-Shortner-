
const express = require('express')
let app = express()

app.use("/",function(req,res){
    return res.send({msg:"hellow world"})
})

app.listen(3000,()=>{
    console.log("connected")
})