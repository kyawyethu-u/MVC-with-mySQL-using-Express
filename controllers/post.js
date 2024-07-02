// const posts =[]; //supposed model
const Post = require("../models/posts")//model import


exports.createPost =(req,res)=>{
    const {title,description,photo} = req.body;
    Post.create({
        title,
        description,
        img_url : photo,
    }).then((result) =>
         {console.log(result)
            console.log("New post created")
             res.redirect("/"); 
         })
    .catch((err)=> console.log(err))

// const post = new Post(title,description,photo);  // class 
//       post.setPost().then(()=>{
//         res.redirect("/"); 
//       })
//       .catch((err)=> console.log(err))
  
};

exports.renderCreatePage = (req,res)=>{
   
    res.render("addpost",{title: "Post create"})//"addpost", value is must
};

exports.getPosts = (req,res)=>{
   //getAllPost is directly useable because of static keyword
   Post.findAll({order: [["createdAt","desc"]]})
   .then(posts =>{
    res.render("home",{title: "Home Page",posts})
   })
   .catch(err=> console.log(err))
//     Post.getAllPost()
//     .then(([rows]) => {
//     console.log(rows); 
//      res.render("home",{title: "Hello world",postsArr: rows}); }
// )
//    .catch(err=> console.log(err))
}

     


exports.getPost = (req,res)=>{
    const postId = (req.params.postId);
//    Post.findByPk(postId)
      Post.findOne({where: {id: postId}})
    .then(post =>
         {res.render("details", {title: "Post details page",post})})
    .catch(err=> console.log(err))
    // const post = posts.find(post=>post.id== postId);
    // console.log(post);
    // Post.getSinglePost(postId)
    // .then(([row])=>{
    //     console.log(row);
    //     res.render("details", {title: "Post details page",post: row[0]})
    // } )
    // .catch(err=> console.log(err))
    
}

exports.deletePost = (req,res)=>{
    const postId = (req.params.postId);

    Post.findByPk(postId)
    .then((post)=>{
        if(!post){
        res.redirect("/")} 
        return post.destroy()})
        .then(result => {
            console.log("Post deleted!!!")
            res.redirect("/")
        })
    .catch(err=> console.log(err))
}

exports.getOldPost =(req,res)=>{
    const postId = (req.params.postId);
    Post.findByPk(postId)
    .then((post) =>

        {res.render("editpost", {title: `${post.title}`,post})})
   .catch(err=> console.log(err))
} 

exports.updatePost = (req,res) =>{
    const {title,description,photo,post_id} = req.body;
    Post.findByPk(post_id)
    .then(post => {
        post.title =title,
        post.description =description,
        post.img_url =photo
        return post.save()
    })
    .then(result => 
    {console.log(`Post id => ${post_id} is updated`)
    res.redirect("/")
     })
    .catch(err=> console.log(err))

}