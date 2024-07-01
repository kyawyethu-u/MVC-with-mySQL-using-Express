const mysql = require("mysql2")

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    database: "blog",
    password: "abcd"
})


module.exports = pool.promise();//promise sent it to models vs controller






//utils = common used files
// command = npm i mysql2
//now is database set up file