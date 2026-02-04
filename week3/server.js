import express from 'express'
import { userApp } from './APIs/UserAPI.js';
import { connect } from 'mongoose';
import { productApp } from './APIs/ProductAPI.js';
import cookieParser from 'cookie-parser';
const app=express()

const port=4000;
//Connect to database
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/')
        console.log("db connection successful")
        //Start server after successful db connection
        app.listen(port,()=>{
            console.log("server is running on port 4000")

            })
    } catch(err){
        console.log("failed to connect to db:",err);
            }
    }
connectDB()
app.use(express.json())
//middleware to parse cookies
app.use(cookieParser());
app.use('/user-api',userApp);
app.use('/product-api',productApp);
//default error handler
app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",reason:err})
})
