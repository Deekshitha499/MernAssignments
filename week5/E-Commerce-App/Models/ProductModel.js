import { Schema,model } from 'mongoose'

//product schema
const productSchema = new Schema({
    productName:{
        type:String,
        required:[true,"product name required"]
    },
    price:{
        type:Number,
        required:[true,"product price required"]

    },
    brand:{
        type:String,
        required:[true,"product brand required"]
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

export const productModel=model("product",productSchema)
