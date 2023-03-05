const sq = require('../db')
const { DataTypes } = require('sequelize')


const User = sq.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, unique: false,},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Product = sq.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    description: {type: DataTypes.JSON, allowNull: true},
    shortDescription: {type: DataTypes.JSON, allowNull: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.DOUBLE, defaultValue: 5.0},
    views: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    tag: {type: DataTypes.STRING, allowNull: true},
})

module.exports = {
    User,
    Product,
}



