//userapi
import exp from 'express'
import { userModel } from '../models/usermodels.js'
import { hash,compare } from 'bcryptjs' //compare user to compare password and returns boolean value

import jwt from 'jsonwebtoken';//are default export
import { verifyToken } from '../middlewares/verifyToken.js';

export const userApp=exp.Router()
//user api routes
//create user
//read user
userApp.post('/users',async(req,res)=>{
    //get new user from req
    let newUser=req.body
    //console.log(newUser)
   let hashedpassword=await hash(newUser.password,12)
   newUser.password=hashedpassword;

    //create new user document
    let newUserDoc=new userModel(newUser)
    //save in database
    await newUserDoc.save()
    res.status(201).json({message:"user created"})
});
userApp.get('/users',async(req,res)=>
{
    //read users from db
    let usersList =await userModel.find()
    res.status(200).json({message:"users",payload:usersList})

});
//read user by objectid(becoz obid is uniques for every user in mongodb)
userApp.get("/users/:id",async(req,res)=>{
    let objId=res.params.id;
    //find the user in db
    let userObj=await userModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
});

//update user
userApp.put("/users/:id",async(req,res)=>{
    //get obID from url params
    let objId=req.params.id
    //get modified user from req
    let modifiedUser=req.body
    //make update
   let latestUser= await userModel.findByIdAndUpdate(objId,
    {$set:{...modifiedUser}},
    {new:true,runValidators:true}) //updates and returns the lastest document //validates the data after updation also
    //send res
    res.status(200).json({message:"User Modified",payload:latestUser})
});
//user auth routh(login) route
userApp.post('/auth',async(req,res)=>
{
    let userCred=req.body
    //check for username
    let userOfDB=await userModel.findOne({username:userCred.username})
    //if user not found
    if(userOfDB===null)
    {
       return res.status(404).json({message:"invalid username"})
    }
    //compare password
    let status=await compare(userCred.password,userOfDB.password)
    if(status===false)
        {
           return res.status(404).json({message:"invalid password"})
        }
    //created signed token
   let signedToken= jwt.sign({username:userCred.username},'secret',{expiresIn:30})
   //send token in res
   res.cookie('token',signedToken,{
    httpOnly:true, //it is httponly cookie
    secure:false,
    sameSite:"lax" //moderate level security
   })
   res.status(200).json({message:"login success"});
});


//delete user
userApp.delete("/users/:id",async(req,res)=>{
    //get obID from url params
    let objId=req.params.id
    //make delete by id
   let deletedUser= await userModel.findByIdAndDelete(objId)
    //send res
    res.status(200).json({message:"User Deleted",payload:deletedUser})
});

//test route
userApp.get("/test",verifyToken ,(req,res)=>{
    res.json({message:"test route"})
});
