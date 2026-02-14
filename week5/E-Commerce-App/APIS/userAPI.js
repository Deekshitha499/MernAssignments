import exp from 'express'
export const userRoute = exp.Router()
import { userModel } from "../models/userModel.js"
import { productModel } from '../models/productModel.js'
import { hash } from 'bcryptjs'

//create user
userRoute.post('/users',async(req,res)=>{ 
    let newUser=req.body
    await new userModel(newUser).validate()
    let hashedpassword=await hash(newUser.password,12)
    newUser.password=hashedpassword;
    let newUserDoc=new userModel(newUser)
    await newUserDoc.save({validateBeforeSave:false})
    res.status(201).json({message:"user created"})
});

//add prod to users cart
userRoute.put("/user-cart/user-id/:uid/product-id/:pid", async(req,res)=>{
    let {uid,pid} = req.params;
    let user=await userModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"user not found"})
    }
    let product=await productModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"product not found"})
    }
    let existingItem = user.cart.find(item=>item.product.toString()=== pid);
    if(existingItem){
        existingItem.quantity+=1
    }else{
        user.cart.push({product:pid, quantity:1})
    }
    await user.save();
    let modifiedUser = await userModel.findById(uid).populate("cart.product")
    
    res.status(200).json({message:"product added to cart",payload:modifiedUser})
})

//read user by id
userRoute.get("/users/:uid", async(req,res)=>{
    let {uid}=req.params;
    let userObj=await userModel.findById(uid).populate("cart.product")
    res.status(200).json({message:"user", payload:userObj})
})




