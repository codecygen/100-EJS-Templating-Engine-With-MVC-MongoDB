// MongoDB-Connect-Database
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const { URL } = process.env;

let _db;

const mongoConnect = (callbackFunc) => {
  MongoClient.connect(URL)
    .then((dbConnectionResult) => {
      console.log("Connected!");
      _db = dbConnectionResult.db();
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

module.exports = {
  mongoConnect,
  getDatabase,
};
