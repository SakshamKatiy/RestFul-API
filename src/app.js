const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens.js");



const app = express();
const port = process.env.PORT || 3000;

// we will handle post req
app.post("/mens",async(req,res)=>{
    try{
        const addingRecord = new MensRanking(req.body);

        console.log(req.body);
        
        const getmens = await addingRecord.save();
        res.status(201).send(getmens)
    }catch(e){
        res.status(400).send(e);
    }

})

app.get('',(req,res)=>{
    res.send("Hello from saksham");

})
app.listen(port,()=>{
    console.log(`connection working ${port}`)
})