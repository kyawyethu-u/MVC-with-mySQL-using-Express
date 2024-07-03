const Sequelize = require("sequelize")

const sequelize = require("../utils/database")

const User = sequelize.define("user",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,  //cause of only one

});

module.exports = User; 