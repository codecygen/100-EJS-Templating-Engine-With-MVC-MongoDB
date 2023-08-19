const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const UserTable = sequelize.define(
  "UserTable",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    adminId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "UserTable",
  }
);

module.exports = UserTable;
