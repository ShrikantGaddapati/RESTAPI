const express=require("express");
const dotenv=require("dotenv");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json());



const connectDB=require('./config/db');

//load configurations
dotenv.config({
    path:'./config/config.env'});
    connectDB();


    //route
app.use('/',require('./routes/index'));
app.listen(3000);

// app.get('/',(req,res)=>

// {
//     res.send("yes");

// })

// app.get('/employees',(req,res)=>

// {
//     res.send("employees");

// });