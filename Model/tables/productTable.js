const dbConnection = require("../dbConnection");
const { ObjectId } = require("mongodb");

class ProductTable {
  constructor(productName, productDesc, productPrice, productImg, adminId) {
    this.productName = productName;
    this.productDesc = productDesc;
    this.productPrice = productPrice;
    this.productImg = productImg;
    this.adminId = adminId;
  }

  async save() {
    try {
      const db = dbConnection.getDatabase();
      const collection = await db.collection("ProductTable");
      const result = await collection.insertOne(this);
    } catch (err) {
      console.error(err);
    }

    dbConnection.closeDatabase();
  }

  static async getProducts() {
    let foundProducts;

    try {
      const db = dbConnection.getDatabase();
      const cursor = await db.collection("ProductTable").find();
      foundProducts = await cursor.toArray();
    } catch (err) {
      console.error("Error fetching products:", err);
      throw err;
    } finally {
      // If we close database it does not fetch anything.
      // dbConnection.closeDatabase();
    }

    return foundProducts;
  }

  static async findById(productId) {
    let foundProduct;
    try {
      const db = dbConnection.getDatabase();
      foundProduct = await db
        .collection("ProductTable")
        .findOne({ _id: new ObjectId(productId) });
    } catch (err) {
      console.error(err);
      throw err;
    }

    return foundProduct;
  }

  static async adminProducts(adminId) {
    let test;
    try {
      test = adminId;
    } catch (err) {
      console.error(err);
      throw err;
    }

    return test;
  }
}

module.exports = ProductTable;
