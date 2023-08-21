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
    
    return result;
  }
}

module.exports = UserTable;
