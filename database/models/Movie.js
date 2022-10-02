const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../db');

class Movie extends Model {}

Movie.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false
    },
    year:{
      type: DataTypes.INTEGER,
    },
}, { sequelize, modelName: 'movie', timestamps: false });
  
module.exports = Movie;