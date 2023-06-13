const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    length: 50,
  },
  slug: {
    type: String,
    length: 100,
    default: null,
  },
  status: {
    type: Boolean,
    default: null,
  },
  created_at: {
    type: Date,
    default: new Date().getTime(),
  },
});

const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;
