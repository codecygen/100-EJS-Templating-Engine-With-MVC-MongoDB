const dbConnection = require("../dbConnection");
const { ObjectId } = require("mongodb");

class UserTable {
  constructor(userName, userEmail, adminId, userCart) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.adminId = adminId;
    this.userCart = userCart;
  }

  async createUsers(usersArray) {
    let result;

    try {
      const db = dbConnection.getDatabase();
      result = await db.collection("UserTable").insertMany(usersArray);
    } catch {
      (err) => console.error(err);
    }

    dbConnection.closeDatabase();

    return result;
  }

  static async getUsers() {
    let foundUsers;

    try {
      const db = dbConnection.getDatabase();
      const cursor = await db.collection("UserTable").find();
      foundUsers = await cursor.toArray();

    } catch (err) {
      console.error("Error fetching users:", err);
      throw err;
    } finally {
      // If we close database it does not fetch anything.
      // dbConnection.closeDatabase();
    }

    return foundUsers;
  }

  static async findById(userId) {
    let foundUser;

    try {
      const db = dbConnection.getDatabase();
      foundUser = await db
        .collection("UserTable")
        .findOne({ _id: new ObjectId(userId) });
    } catch (err) {
      console.error(err);
      throw err;
    }

    return foundUser;
  }
}

module.exports = UserTable;
