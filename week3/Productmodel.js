import {Schema, model} from 'mongoose'

const productSchema=new Schema({
    pid:{
        type:Number,
        required:[true,"product id is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    productName:{
        type:String,
        required:[true,"product name is required"]
    }},
    {strict:"throw",
    timestamps:true
})
export const ProductModel=model('product',productSchema)

