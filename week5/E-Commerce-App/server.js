import exp from 'express' 
import { userRoute } from './apis/userAPI.js';
import { prodRoute } from './apis/productAPI.js';
import {connect} from 'mongoose'


//create http server
const app=exp();
const port=4000;
//connect to mongodb db
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/ecommerce")
        console.log("connected to db")
        app.listen(port,()=>console.log("server listening on port 4000..."))
    }catch(err){
        console.log("DB connection unsuccessful",err);
    }

}

connectDB()
app.use(exp.json())
app.use("/user-api",userRoute)
app.use("/prod-api",prodRoute)
app.use((err,req,res,next)=>{
    res.json({message:"error",reason:err.message})
})
