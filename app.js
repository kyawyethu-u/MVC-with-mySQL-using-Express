const express = require("express");
const path = require("path")    //default module import

const bodyparser = require("body-parser");//third-party package import

const sequelize = require("./utils/database")//local file import

const  Post = require("./models/post")
const  User = require("./models/user")

const app = express(); 


 app.set("view engine","ejs");
 app.set("views","views")

const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({extended: false}))

app.use((req,res,next)=>{
    User.findByPk(1).then(user =>{ 
        req.user = user;
        console.log(user)
        next();
    })//whenever go any route,user as req's custom key,
    .catch((err)=> console.log(err))
})


app.use("/post",(req,res,next)=>{
    console.log("I am post middleware")
    next();
});
app.use((req,res,next)=>{
    console.log("I am parent middleware")
    next();
});
app.use("/admin",(req,res,next)=>{
    console.log("Admin middleware approved");
    next();
})

app.use("/admin",adminRoutes);
app.use(postRoutes);  

Post.belongsTo(User, {constraints: true,onDelete: "CASCADE"});
 User.hasMany(Post);
//sync is promiswe like pool.promise to order database
sequelize          //checked database vs model
.sync()            //sync always detect models/schema changes and changed accordingly
.then(() => {
    User.findByPk(1);
   }
)
.then(user => {
    if(!user){
        User.create({name: "something",email: "abcd@gmail.com"});
    }
    return user;
})
.then((user)=>{
    console.log(user)
    app.listen(8080);
})
.catch((err)=> console.log(err))    


