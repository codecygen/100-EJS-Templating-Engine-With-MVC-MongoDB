const dbConnection = require("../dbConnection");
const { ObjectId } = require("mongodb");

const UserTable = require("./userTable");

class OrderTable {
  constructor(orderList, userId) {
    this.orderList = orderList;
    this.userId = userId;
  }

  async save() {
    const db = dbConnection.getDatabase();
    const orderCollection = await db.collection("OrderTable");
    console.log(this.orderList);
    // console.log(this.userId);

    try {
        await orderCollection.updateOne(
          { userId: this.userId },
          {
            $push: {
              orders: {
                $each: [this.orderList]
              },
            },
          },
          { upsert: true } // This creates a new document if one doesn't exist for the specified userId
        );
      } catch (err) {
        console.error(err);
      }

    await UserTable.removeAllCart(this.userId);
  }
}

module.exports = OrderTable;