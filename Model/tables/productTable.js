const dbConnection = require("../dbConnection");

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
}

module.exports = ProductTable;
