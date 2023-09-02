// This file is used to create associations in between tables.
const ProductTable = require("./tables/productTable");
const UserTable = require("./tables/userTable");

const userTable = new UserTable();

// const CartTable = require("./tables/cartTable");
// const OrderTable = require("../Model/tables/orderTable");

// // MySQL-Sequelize-One-to-Many-Relation
// // This is for product creation of admins
// // UserTable.hasMany(ProductTable, { onDelete: "CASCADE", foreignKey: "adminId" });
// ProductTable.belongsTo(UserTable, {
//   onDelete: "CASCADE",
//   foreignKey: "adminId",
// });

// // MySQL-Sequelize-Many-to-Many-Relation
// // This is for Cart that users will create to buy products
// UserTable.belongsToMany(ProductTable, {
//   through: CartTable,
//   onDelete: "CASCADE",
// });
// // ProductTable.belongsToMany(UserTable, {
// //   through: CartTable,
// //   onDelete: "CASCADE",
// // });

// // MySQL-Sequelize-One-to-Many-Relation
// UserTable.hasMany(OrderTable, {
//   onDelete: "CASCADE",
//   foreignKey: "UserTableId",
// });

// // MySQL-Sequelize-One-to-Many-Relation
// ProductTable.hasMany(OrderTable, {
//   onDelete: "CASCADE",
//   foreignKey: "ProductTableId",
// });
// OrderTable.belongsTo(ProductTable, {
//   onDelete: "CASCADE",
//   foreignKey: "ProductTableId",
// });

module.exports = {
  ProductTable,
  userTable,
  // CartTable,
  // OrderTable,
};
