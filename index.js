const express = require("express");
const ProductRouter = require("./routes/ProductRouter");
const app = express();
PORT = 5000;

// routes
app.use("/product", ProductRouter);

app.listen(PORT, () => {
  `APP RUNNING ON LOCALHOST:${PORT}`;
});
