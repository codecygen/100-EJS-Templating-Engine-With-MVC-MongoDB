const express = require("express");
const path = require("path");

// Express-Session-Keep-Cookie-in-req.session
// This is used to keep session for chosen admin
const session = require("express-session");

// MySQL-Sequelize-Connect-Database
// Allows .env file to be used
require("dotenv").config();
// MySQL-Sequelize-Connect-Database
// This is used to connect database
const { sequelize, databaseAuth } = require("./Model/dbConnection");
// MySQL-Sequelize-Create-And-Associate-Models
// Associations will be kept in this file
// Even though the table names are not going to be used in here,
// it will be used in dbOperation.js file.
const Tables = require("./Model/dbAssociation");
const dbAdminOperation = require("./Model/operations/dbAdminOperation");

const app = express();

// Express body parsing
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

// Specify CSS file location
app.use(express.static(path.join(__dirname, "View/styles")));

// Specify EJS templating engine
app.set("view engine", "ejs");
// First one is name second one is value
// it means views of ejs will be stored in /View/html directory
app.set("views", "View/html");

const adminRoute = require("./Controller/routes/adminRoute");
const shopRoute = require("./Controller/routes/shopRoute");
const NoRoute = require("./Controller/routes/NoRoute");

// Express-Session-Keep-Cookie-in-req.session
// This is used to keep session for chosen admin
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(async (req, res, next) => {
  let allUsers;

  if(!req.session.userId) {
    allUsers = await dbAdminOperation.getAllUsers();

    req.session.userId = allUsers[0].id;
    req.session.userName = allUsers[0].userName;
    req.session.userEmail = allUsers[0].userEmail;
    req.session.adminId = allUsers[0].adminId
  }

  next();
});

// Extra layer "/admin"
// Route only has "/add-product"
// Combines to the Route /admin/add-product
// Instead of app.use and router file, we could have also used app.get
app.use("/admin", adminRoute);

app.use(shopRoute);

// Unspecified routes, 404 page
// Instead of app.use and router file, we could have also used app.get
app.use(NoRoute);

// MySQL-Sequelize-Connect-Database
// This is used to connect database
sequelize
  .sync({ alter: true })
  .then(async (res) => {
    await databaseAuth();
    // This always guarantees that there are 2 admins
    await dbAdminOperation.checkAndCreateAdminsAndUsers();
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
