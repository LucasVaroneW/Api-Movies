const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../db');

class Person extends Model {}

Person.init({
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

}, { sequelize, modelName: 'person', timestamps: false });


module.exports = Person;