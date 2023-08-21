const dbConnection = require("../dbConnection");

class UserTable {
  constructor(userName, userEmail, adminId) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.adminId = adminId;
  }

  // createUsers() {
  //   const db = dbConnection.getDatabase();
  //   db.collection("UserTable").inserMany()
  // }
}

module.exports = UserTable;
