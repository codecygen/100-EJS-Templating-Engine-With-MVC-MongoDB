const dbConnection = require("../dbConnection");

class ProductTable {
  constructor(productName, productDesc, productPrice, productImg) {
    this.productName = productName;
    this.productDesc = productDesc;
    this.productPrice = productPrice;
    this.productImg = productImg;
  }

  save() {
    const db = dbConnection.getDatabase();
    db.collection("productTable")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  }
}

module.exports = ProductTable;
