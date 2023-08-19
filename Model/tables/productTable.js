const Sequelize = require("sequelize");
const { sequelize } = require("../dbConnection");

const ProductTable = sequelize.define(
  "ProductTable",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    productName: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    productDesc: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    productPrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },

    productImg: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "ProductTable"
  }
);

module.exports = ProductTable;
