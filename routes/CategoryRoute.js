const express = require("express");
const CategoryRoute = express.Router();
const CategoryController = require('../controllers/CategoryController')

CategoryRoute.get("/:id?",async (req, res) => {
  const data =await new CategoryController().get(req.params?.id);
  res.send(data);
});

CategoryRoute.post("/store", async (req, res) => {
  const data = await new CategoryController().get(req.body);
  res.send(data);
});

CategoryRoute.patch("/:id?", (req, res) => {
  res.send("Update Category");
});

CategoryRoute.delete("/:id?", (req, res) => {
  res.send("Delete Category");
});

module.exports = CategoryRoute;
