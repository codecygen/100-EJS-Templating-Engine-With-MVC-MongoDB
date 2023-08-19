const Sequelize = require("sequelize");

const { DB, SCHEMA, ADMIN, PASS, HOST, PORT } = process.env;

const sequelize = new Sequelize(SCHEMA, ADMIN, PASS, {
  dialect: DB,
  host: HOST,
  port: PORT,
});

const databaseAuth = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = { sequelize, databaseAuth };
