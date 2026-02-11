import { UserTypeModel } from "../models/UserModel.js";

export const checkAuthor = async (req,res,next)=>{
    //get author id
    let authorId = req.body?.author || req.params?.authorId;
    //verify author
    let author = await UserTypeModel.findById(authorId)
    if(!author){
        return res.status(401).json({message:"invalid author"});
    }
    if(author.role===!"AUTHOR"){
        return res.status(403).json({message:"user is not an author"});
    }
    if(!author.isActive){
        return res.status(403).json({message:"author account is not active"});
    }
    next();
}