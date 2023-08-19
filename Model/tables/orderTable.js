const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const OrderTable = sequelize.define(
  "OrderTable",
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
    orderNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "OrderTable",
  }
);

module.exports = OrderTable;
