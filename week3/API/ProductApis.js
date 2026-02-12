import exp from 'express'
import {productModel} from '../models/productModels.js'
export const productApp=exp.Router()
//user api rotes

//create product
productApp.post('/products',async(req,res)=>{
    let newProduct=req.body
    let newProductDoc=productModel(newProduct)
    await newProductDoc.save()
    res.status(201).json({message:"product created"})

})
//read users
productApp.get('/products',async(req,res)=>{
    let productsList = await userModel.find()
    res.status(200).json({message:"products",payload:productsList})

})

//read users by ObjectId
productApp.get("/products/:id",async(req,res)=>{
    let objId=req.params.id;
    let productObj=await userModel.findById(objId)
    res.status(200).json({message:"product",payload:productsList})

})
//update user
userApp.put("/products/:id",async(req,res)=>{
    let objId=req.params.id
    let modifiedProduct=req.body
    let latestProduct=await userModel.findByIdAndUpdate(objId,{$set:{...modifiedProject}},{new:true})
    res.status(200).json({message:"product modified",payload:latestProduct})
});
//delete user
userApp.delete("/products/:id",async(req,res)=>{
    let objId=req.params.id
    let deletedProduct=await userModel.findByIdAndDelete(objId)
    res.status(200).json({message:"product removed",payload:deletedProduct})

});