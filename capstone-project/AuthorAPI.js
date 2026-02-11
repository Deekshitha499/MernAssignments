import exp from 'express'
export const authorRoute=exp.Router()
import { authenticate, register } from '../services/authService.js';
import { UserTypeModel } from '../models/UserModel.js';
import { ArticleSchema } from '../models/ArticleModel.js';
import { checkAuthor } from '../middlewares/checkAuthor.js';
import { verifyToken } from '../middlewares/verifyToken.js'; 

//register author-public
authorRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj=req.body;
    //call register
    const newUserObj = await register({...userObj,role:"AUTHOR"});
    //send response
    res.status(201).json({message:"author created",payload:newUserObj});
})
//authenticate author-public
authorRoute.post('/authenticate',async(req,res)=>{
    let userCred = req.body;
    let { token, user } = await authenticate(userCred);
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false,
    });
    res.status(200).json({message:"login success", payload:user})
});
//create article-protected
authorRoute.post('/articles',verifyToken, async(req,res)=>{
    let article = req.body;
    let author = await UserTypeModel.findById(article.author)
    if(!author){
        return res.status(401).json({message:"invalid author"})
    } 
    let newArticleDoc = new ArticleSchema(article)
    let createdArticleDoc = await newArticleDoc.save()
    res.status(201).json({message:"article created", payload:createdArticleDoc})

})
//read articles of author-protected
authorRoute.get('/articles/:authorId',verifyToken, checkAuthor,async(req,res)=>{
    let authorId = req.params.authorId;
    let author = await UserTypeModel.findById(authorId)
    if(!author || author.role===!"AUTHOR"){
        return res.status(401).json({message:"invalid author"})
    } 
    let articles = await ArticleSchema.find({author:authorId,isArticleActive:true}).populate("author","firstName email")
    res.status(200).json({message:"articles", payload:articles})
})
//edit article-protected
authorRoute.put("/articles",verifyToken, checkAuthor,async(req,res)=>{
    let { articleId, title, category, content, author} = req.body;
    let articleOfDB = await ArticleSchema.findOne({_id:articleId, author:author});
    if(!articleOfDB){
        return res.status(401).json({message:"article not found"})
    }
    let updatedArticle = await ArticleSchema.findByIdAndUpdate(
    articleId,
    {
        $set:{ title, category, content}
    },
    {new:true})

    res.status(201).json({message:"updated article", payload:updatedArticle})
})
//soft delete article-protected
authorRoute.put('/articles',verifyToken ,checkAuthor,async(req,res)=>
{
    let {articleId,author,isArticleActive}=req.body
    //find the article
    let articleOfDB=await ArticleSchema.findOne({_id:articleId,author:author}) //also checks the authorid matches or not
    if(!articleOfDB)
    {
        return res.status(401).json({message:"Article Not found"})
    }
    let deletedArticle=await ArticleSchema.findByIdAndUpdate(articleId,
        {
            $set:{isArticleActive}
        },
        {new:true}
    )
    res.status(201).json({message:"Deleted Article",payload:deletedArticle})

})

