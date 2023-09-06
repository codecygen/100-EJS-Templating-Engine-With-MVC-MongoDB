// MongoDB-Create-And-Associate-Model

// This file is used to create associations in between tables.
const ProductTable = require("./tables/productTable");
const UserTable = require("./tables/userTable");

// const CartTable = require("./tables/cartTable");
// const OrderTable = require("../Model/tables/orderTable");


module.exports = {
  ProductTable,
  UserTable,
  // CartTable,
  // OrderTable,
};
