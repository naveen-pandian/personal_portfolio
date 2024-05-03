import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send('Express run in vercel ..  hello !! naveen ');
});

app.listen(5000,()=>{
    console.log("app is running..");
});