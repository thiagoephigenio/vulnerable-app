const { Sequelize, DataTypes } = require("sequelize");
const database = require("../../config/database")

const sequelize = new Sequelize(
  database
);

const Task = sequelize.define(
  "task",
  {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    is_complete: DataTypes.BOOLEAN,
  },
//  { operatorsAliases: sequelize.Op}
);

module.exports = Task;
