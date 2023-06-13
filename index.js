const express = require("express");
const ProductRouter = require("./routes/Router");

PORT = 5000;

// routes
app.use("/product", ProductRouter);

app.listen(PORT, () => {
  `APP RUNNING ON LOCALHOST:${PORT}`;
});
