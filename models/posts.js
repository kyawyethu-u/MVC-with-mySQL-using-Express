//class based model
//req to database // sent it to utils/database.js
const db = require("../utils/database")


module.exports = class Post {
    constructor(title,description,image_url){
        this.title = title;       //constructor built, class keyword (;)
        this.description = description;
        this.image_url = image_url;
    }
//(title,description,image_url)these are db column titles(dont need title cause of AI in db)
//?,?,? = [this.title,this.description,this.image_url]
    setPost(){
       return db.execute("INSERT INTO posts (title,description,image_url) VALUES (?,?,?)",
            [this.title,this.description,this.image_url]
        )//insert it to database after value assign in class cause of lackof static keyword
    }


    //method built to get all posts (static method is to use directly without constructor)
    static getAllPost(){     
        return db.execute("SELECT * FROM posts");//excute is for sql commands
    }
    static getSinglePost(id){
        return db.execute("SELECT * FROM posts WHERE posts.id =?",[id]);
    }    // SELECT = FROM posts WHERE post.id = 1 or 2 or... (parameter)


}

