import exp from 'express'
import { authenticate, register } from '../services/authService.js';
export const commonRouter = exp.Router()
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { UserTypeModel } from '../models/UserModel.js';


//login
commonRouter.post("/authenticate",async(req,res)=>{
    let userCred = req.body;
        let { token, user } = await authenticate(userCred);
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:"lax",
            secure:false,
        });
        res.status(200).json({message:"login success", payload:user})
})

//logout
commonRouter.get("/logout",async(req,res)=>{
    res.clearCookie('token', {
    httpOnly: true, // Must match original  settings
    secure: false,   // Must match original  settings
    sameSite: 'lax' // Must match original  settings
  });
  
  res.status(200).json({ message: 'Logged out successfully' });
})

//change password
commonRouter.put('/change-password',async(req,res)=>{
    // get current password and new password
    const {email,oldPassword,newPassword}=req.body
    const DBdata=await UserTypeModel.findOne({email})
    // check the current password is correct
    const comparePassword=bcrypt.compare(oldPassword,DBdata.password)
    if(!comparePassword){
        return res.status(400).json({message:"enter the correct password"})
    }
    // replace the current password with new password
    const hashedPassword=await bcrypt.hash(newPassword,10)
    DBdata.password=hashedPassword
    DBdata.save();
    // send res
    res.status(200).json({message:"password updated successfully"})
})






