const dbConnection = require("../dbConnection");

class UserTable {
  constructor(userName, userEmail, adminId) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.adminId = adminId;
  }

  async createUsers(usersArray) {
    const db = dbConnection.getDatabase();
    const result = await db.collection("UserTable").insertMany(usersArray);

    dbConnection.closeDatabase();

    return result;
  }

  async getUsers() {
    const db = dbConnection.getDatabase();
    const foundUsers = await db.collection("UserTable").find();

    return foundUsers;
  }
}

module.exports = UserTable;
