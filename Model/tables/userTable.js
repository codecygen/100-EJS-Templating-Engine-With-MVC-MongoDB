const dbConnection = require("../dbConnection");

class UserTable {
  constructor(userName, userEmail, adminId) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.adminId = adminId;
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
}

module.exports = UserTable;
