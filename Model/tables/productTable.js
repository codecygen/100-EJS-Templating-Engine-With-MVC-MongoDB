const dbConnection = require("../dbConnection");

class ProductTable {
  constructor(productName, productDesc, productPrice, productImg) {
    this.productName = productName;
    this.productDesc = productDesc;
    this.productPrice = productPrice;
    this.productImg = productImg;
  }

  async save(newProduct) {
    try {
      const db = dbConnection.getDatabase();
      const collection = await db.collection("ProductTable");
      const result = await collection.insertOne(newProduct);
    } catch (err) {
      console.error(err);
    }

    dbConnection.closeDatabase();
  }
}

module.exports = ProductTable;
