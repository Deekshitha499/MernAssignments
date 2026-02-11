import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { userRoute } from './APIs/UserAPI.js'
import  cookieParser  from 'cookie-parser'
import { authorRoute } from './APIs/AuthorAPI.js'
import { adminRoute } from './APIs/AdminAPI.js'
import { commonRouter } from './APIs/commonAPI.js'
config()

const app=exp()
app.use(exp.json())
app.use(cookieParser())
app.use('/user-api', userRoute)
app.use('/author-api', authorRoute)
app.use('/admin-api', adminRoute)
app.use('/common-api', commonRouter)

const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("DB connection successful")
        app.listen(process.env.PORT,()=>console.log("server started"))
    }catch(err){
        console.log("err in db connection")
    }
}

connectDB()

app.use((req,res,next)=>{
    //console.log(req.url)
    res.json({message:`${req.url} is invalid path`})
})


//error handling middleware
app.use((err,req,res,next)=>{
    res.json({message:"error",reason:err.message})
})