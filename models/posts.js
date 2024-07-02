//class based model

const Sequelize = require("sequelize"); //class import 

const sequelize = require("../utils/database");

//posts => post
//products => product
//users => user
//post is database name
const Post = sequelize.define("posts",{
    id :{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    img_url: {
        type: Sequelize.STRING,
        allowNull:false,
    }
});

module.exports = Post; //schema export/ to build database, whenever we run server







   
