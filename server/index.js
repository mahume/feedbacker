const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "Test" });
});

const PORT = process.env.PORT || 8080;
app.listen(5000);