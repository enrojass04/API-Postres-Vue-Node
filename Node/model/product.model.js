<<<<<<< HEAD
//const bd = require('../database/db');

const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("database_app", "root", "Poli1234", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
});
=======
const sequelize = require ('../config/bd');

const { Model, DataTypes } = require("sequelize");
>>>>>>> 9722e12 (Final Back y Front)

class Product extends Model {

}

Product.init({
        codigo: {type:DataTypes.INTEGER, primaryKey:true},
        nombre: DataTypes.STRING,
        sabor: DataTypes.STRING,
        tamano: DataTypes.STRING,
        adicional: DataTypes.STRING,
        precio: DataTypes.DOUBLE(10, 3)
    },
    {
        sequelize, 
        modelName: "Product"
    }
);

module.exports = Product;