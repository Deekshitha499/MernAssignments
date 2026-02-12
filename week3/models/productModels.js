import {Schema,model} from 'mongoose'

//create user schema
const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"name is required"],
    
    },
    productId:{
        type:Number,
        required:[true,"id is required"],
    },
    brand:{
        type:String,
        required:[true,"brand is required"],
        
    }

},{
    strict:"throw",
    timestamps:true
});
//create user model with that schema
export const productModel=model("product",productSchema)





