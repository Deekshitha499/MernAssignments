import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserTypeModel } from "../models/UserModel.js";

//registration function
export const register = async (userObj)=>{
    //create document
    const userDoc = new UserTypeModel(userObj);
    //validate for empty passwords
    await userDoc.validate();
    //hash and replace plain password
    userDoc.password = await bcrypt.hash(userDoc.password,10);
    //save
    const created = await userDoc.save();
    //convert mongodb document to js object to remove password
    const newUserObj = created.toObject(); 
    //remover password
    delete newUserObj.password;
    //return user obj without password
    return newUserObj;

};

//authentication function
export const authenticate = async ({email, password }) => {
    //check user with email & role
    const user = await UserTypeModel.findOne({email,role});
    if(!user){
        const err = new Error("Invalid email");
        err.status = 401;
        throw err;
    } 
    //compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        const err = new Error("Invalid password");
        err.status = 401;
        throw err;
    } 
    //check isActive state
    if(!isActive){
        const err = new Error("your account blocked. please contact admin..");
        err.status = 401;
        throw err;
    }

    //generate token
    const token = jwt.sign({userId:user._id, 
        role:user.role, email:user.email },
        process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    
    const userObj = user.toObject();
    delete userObj.password;

    return { token, user:userObj };

};