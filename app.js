const express = require("express");
const { Products } = require("./data");
const app = express();

app.get("/api/products", (req, res) => {
  res.status(200).json(Products);
});

app.listen(8000, () => {
  console.log("app is running");
});
