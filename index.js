const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/profile", function (req, res) {
  res.render("pages/profile");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
