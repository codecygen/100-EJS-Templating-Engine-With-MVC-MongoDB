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
    let foundUsers;

    try {
      const db = dbConnection.getDatabase();
      const cursor = await db.collection("UserTable").find();
      foundUsers = await cursor.toArray();
    } catch {
      (err) => console.error(err);
    }
    
    return foundUsers;
  }
}

module.exports = UserTable;
