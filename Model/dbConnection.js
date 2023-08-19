const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const { URL } = process.env;

const mongoConnect = (callbackFunc) => {
  MongoClient.connect(URL)
    .then((dbConnectionResult) => {
      console.log("Connected!");
      callbackFunc(dbConnectionResult);
    })
    .catch((err) => console.error(err));
};

module.exports = mongoConnect;