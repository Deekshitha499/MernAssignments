import exp from 'express';
import { authenticate, register } from '../services/authService.js'
import { UserTypeModel } from '../models/UserModel.js';
import { ArticleSchema } from '../models/ArticleModel.js';
export const userRoute=exp.Router();

//register user
userRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj=req.body;
    //call register
    const newUserObj = await register({...userObj,role:"USER"});
    //send response
    res.status(201).json({message:"user created",payload:newUserObj});
});

//authenticate user
userRoute.post('/authenticate',async(req,res)=>{
    let userCred = req.body;
    let { token, user } = await authenticate(userCred);
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(200).json({message:"login success", payload:user})
});

//read all articles-protected
userRoute.get('/articles/:authorId', async(req,res)=>{
    let authorId = req.params.authorId;
    let author = await UserTypeModel.findById(authorId)
    if(!author || author.role===!"AUTHOR"){
        return res.status(401).json({message:"invalid author"})
    } 
    let articles = await ArticleSchema.find({author:authorId,isArticleActive:true}).populate("author","firstName email")
    res.status(200).json({message:"articles", payload:articles})
})

//add comments to articles-protected
userRoute.put('/articles/:articleId',async(req,res)=>{
    // get the articleId from url path
     let {articleId}=req.params;
     let {author,comment}=req.body;
     let articleOfDB=await ArticleSchema.findById(articleId);
     if(!articleOfDB)
     {
           return res.status(401).json({message:"article not found"});
     }
      articleOfDB.comments.push({author,comment})
     let updatedArticle=await articleOfDB.save();
     res.status(200).json({message:"comment added successfully",payload:updatedArticle})
})