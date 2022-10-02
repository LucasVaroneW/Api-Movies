const {Model, DataTypes, Sequelize} = require('sequelize');
const sequelize = require ('../db');

class Cast extends Model {}

Cast = sequelize.define('cast', {
    role: Sequelize.STRING
  });

Cast.init({
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
    },
    actor: {
        type: DataTypes.TINYINT(1),
    },
    director: {
        type: DataTypes.TINYINT(1),
    },
    producer: {
        type: DataTypes.TINYINT(1),
    },


}, { sequelize, modelName: 'cast', timestamps: false, tableName:'cast' });

module.exports = Cast;