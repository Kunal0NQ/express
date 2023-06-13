const express = require("express");
const ProductRouter = express.Router();
const ProductController = require("../controllers/ProductController");

ProductRouter.get("/", (req, res) => {
  res.send("Express home page");
});

ProductRouter.get("/:id?", (req, res) => {
  const data = new ProductController().get();
  res.send(data);
});

ProductRouter.post("/:id?", (req, res) => {
  const data = "Store Product";
  res.send(data);
});

ProductRouter.patch("/:id?", (req, res) => {
  const data = new ProductController().get();
  res.send(data);
});

ProductRouter.delete("/:id?", (req, res) => {
  const data = new ProductController().get();
  res.send(data);
});

module.exports = ProductRouter;
