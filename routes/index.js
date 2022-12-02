require("dotenv").config();
var express = require("express");
var router = express.Router();

const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_LINK;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection erorr"));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/catalog");
  console.log(process.env.MONGODB_LINK);
});

module.exports = router;
