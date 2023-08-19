const express = require("express");
const path = require("path");

// Express-Session-Keep-Cookie-in-req.session
// This is used to keep session for chosen admin
const session = require("express-session");

// MongoDB-Connect-Database
// Allows .env file to be used
require("dotenv").config();

// MongoDB-Connect-Database
// This is used to connect database
// const { sequelize, databaseAuth } = require("./Model/dbConnection");

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

// const adminRoute = require("./Controller/routes/adminRoute");
// const shopRoute = require("./Controller/routes/shopRoute");
// const NoRoute = require("./Controller/routes/NoRoute");

// Express-Session-Keep-Cookie-in-req.session
// This is used to keep session for chosen admin
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

// Extra layer "/admin"
// Route only has "/add-product"
// Combines to the Route /admin/add-product
// Instead of app.use and router file, we could have also used app.get
// app.use("/admin", adminRoute);

// app.use(shopRoute);

// Unspecified routes, 404 page
// Instead of app.use and router file, we could have also used app.get
// app.use(NoRoute);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
