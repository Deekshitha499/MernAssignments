import exp from 'express'
import { productModel } from '../models/productModel.js';
export const prodRoute = exp.Router()

prodRoute.post("/products",async(req,res)=>{
    let productObj=req.body;
    let productDocument=new productModel(productObj)
    await productDocument.save()
    res.status(201).json({message:"product created"})
});

