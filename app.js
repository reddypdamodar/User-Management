//importing dependencies
const express = require("express");
const app = express();
let bodyParser = require("body-parser");
app.use(express.static(__dirname + "/public"));

// Calling form.js from models
let Form = require("./models/form");
const form = require("./models/form");

const router = require("./router/router");

const { Excel } = require("./models/inf");

//middlewares
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//rendering form.ejs
app.use(router);

// Starting the server at port 3000
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
