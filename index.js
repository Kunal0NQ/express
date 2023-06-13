const express = require("express");
const mongoose = require("mongoose");
const CategoryRoute = require("./routes/CategoryRoute");
const ProductRouter = require("./routes/ProductRoute");
const app = express();
PORT = 5000;

// db connection
mongoose.connect(
  "mongodb+srv://Kunal0NQ:Kunal0NQ123@express.dhpgubc.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once("open", function () {
  console.log("DB Connected");

  app.listen(PORT, () => {
    `app running at localhost:${PORT}`;
  });
});

app.use(express.json());

// routes
app.use("/product", ProductRouter);
app.use("/category", CategoryRoute);
