const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const CartTable = sequelize.define(
  "CartTable",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "CartTable",
  }
);

module.exports = CartTable;
