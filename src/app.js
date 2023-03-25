const fs = require("fs");
const http = require("http");
const url = require("url");

const express = require("express");
const slugify = require("slugify");
const path = require("path");

const app = express();

//-----------SERVER-------------------------

const port = process.env.PORT || 8080;

//CS is read
app.use(express.static(__dirname));

// HTML file is sent
app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../index.html"));
  setTimeout(() => {
    // document.getElementsByClassName('test.message').
    console.log("Delayed for 5 seconds.");
  }, "5000");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);

//-------------------------------------------
