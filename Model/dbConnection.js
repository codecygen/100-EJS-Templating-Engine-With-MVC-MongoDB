// MongoDB-Connect-Database
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const { URL } = process.env;

let _db;
let _client;

const mongoConnect = (callbackFunc) => {
  MongoClient.connect(URL)
    .then((dbConnectionResult) => {
      console.log("Connected to MongoDB Atlas!");
      _db = dbConnectionResult.db();
      _client = dbConnectionResult;
      callbackFunc(dbConnectionResult);
    })
    .catch((err) => {
      console.error(err);
      throw new Error("An error occured!");
    });
};

const getDatabase = () => {
  if (_db) {
    return _db;
  }

  throw new Error("No database found!");
};

const closeDatabase = () => {
  if (_client) {
    _client.close();
  }
  console.log("MOngoDB connection closed");
};

module.exports = {
  mongoConnect,
  getDatabase,
  closeDatabase,
};
