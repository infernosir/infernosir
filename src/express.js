const express = require('express')

const cors = require('cors')
require('./connection')
const User =require('./Schema')
const app = express()

app.use(express.json())
app.use(cors())

app.post("/",async(req,res)=>{
    let user = new User(req.body)
    let result= await user.save()
    res.send(result)
})
app.listen(27017,()=>{
    console.log("listen");
})