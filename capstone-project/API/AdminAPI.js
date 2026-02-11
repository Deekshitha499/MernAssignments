import exp from 'express'
import { ArticleSchema } from '../models/ArticleModel.js';
import { UserTypeModel } from '../models/UserModel.js';

export const adminRoute=exp.Router()


//read all articles (optional)

//block users
adminRoute.put('/block/:userId',async(req,res)=>{
    let {userId}=req.params
    let userOfDB=await UserTypeModel.findById(userId)
    if(!userOfDB)
    {
       return res.status(401).json({message:"User Not Found"})
    }
    let blockedUser =await UserTypeModel.findByIdAndUpdate(
        userId,
       { $set: { isActive: false } },
       {new:true}
    )
    //send res
    res.status(200).json({message:"User Blocked Successfully",payload:blockedUser})

})
//unblock users
adminRoute.put('/unblock/:userId',async(req,res)=>{
    let {userId}=req.params
    let userOfDB=await UserTypeModel.findById(userId)
    if(!userOfDB)
    {
       return res.status(401).json({message:"User Not Found"})
    }
    let unblockedUser =await UserTypeModel.findByIdAndUpdate(
        userId,
       { $set: { isActive: true } },
       {new:true}
    )
    //send res
    res.status(200).json({message:"User UnBlocked Successfully",payload:unblockedUser})

})

