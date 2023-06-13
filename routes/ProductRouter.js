const express = require ("express");
const ProductRouter = express.router();

ProductRouter.get("/:id")(req, res)=>{
    const data = new RouterController().get();
    res.send(data);
}
ProductRouter.post("/store")(req, res)=>{
    const data = "Store Product"
    res.send(data);
}
ProductRouter.patch("/:id")(req, res)=>{
    const data = "Store Product"
    res.send(data);
}
ProductRouter.delete("/:id")(req, res)=>{
    const data = "Store Product"
    res.send(data);
}


modules.exports = Router;