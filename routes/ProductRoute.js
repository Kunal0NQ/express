const express = require("express");
const ProductRoute = express.Router();
const ProductController = require("../controllers/ProductController");

ProductRoute.get("/:id?", (req, res) => {
  const data = new ProductController().get();
  res.send(data);
});

ProductRoute.post("/store", (req, res) => {
  res.send("Read");
});

ProductRoute.patch("/:id?", (req, res) => {
  res.send("update");
});

ProductRoute.delete("/:id?", (req, res) => {
  res.send("Delete");
});

module.exports = ProductRoute;
