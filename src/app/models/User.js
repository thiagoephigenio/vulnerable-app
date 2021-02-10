const { Sequelize, DataTypes } = require("sequelize");
const database = require("../../config/database")

const sequelize = new Sequelize(
  database
);

const User = sequelize.define(
  "user",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
//  { operatorsAliases: sequelize.Op}
);

module.exports = User;
