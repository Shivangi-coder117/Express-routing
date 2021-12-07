const Post = require('../models/post');

module.exports.home= function(req,res)
{
  
   //res.cookie('user_id',25);

   /*Post.find({},function(err,posts)
   {
      return res.render('home',{
         title : "Codeial | Home"   ,
         posts : posts
   });

   

   });*/
   //populate the user for each post

   Post.find({}).populate('user').exec(function(err,posts)
   {
      return res.render('home',{
         title : "Codeial | Home"   ,
         posts : posts
   });

   });
}