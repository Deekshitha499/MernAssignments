import {Schema,model} from 'mongoose'

//create user schema
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"min length should be 4"],
        maxLength:[6,"max length exceeded"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    age:{
        type:Number,
        required:[true,"age is required"],
        min:[18,"age should be above 18"],
        max:[25,"age should be less than 25"]
    }

},{
    strict:"throw",
    timestamps:true
});
//create user model with that schema
export const userModel=model("user",userSchema)





