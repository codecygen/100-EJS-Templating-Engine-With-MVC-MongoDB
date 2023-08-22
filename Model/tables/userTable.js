const dbConnection = require("../dbConnection");

class UserTable {
  constructor(userName, userEmail, adminId) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.adminId = adminId;
  }

  db = dbConnection.getDatabase();

  async createUsers(usersArray) {
    const result = await db.collection("UserTable").insertMany(usersArray);

    dbConnection.closeDatabase();

    return result;
  }

  async getUsers() {
    let foundUsers;

    try {
      const cursor = await db.collection("UserTable").find();
      foundUsers = await cursor.toArray();
    } catch {
      (err) => console.error(err);
    }

    dbConnection.closeDatabase();
    
    return foundUsers;
  }
}

module.exports = UserTable;
