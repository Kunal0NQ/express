class RouterController {
  get() {
    return "GET PRODUCT";
  }
  app.post(
      "/register",(req,res)=>{
          console.log(req.body);
          res.status("All okay")
      }
  )
  app.patch(
      "/register",(req,res)=>{
          console.log(req.body);
          res.status("DONE SUCESSFULLY")
      }
  )
  app.delete(
      "/register",(req,res)=>{
          console.log(req.body);
          res.status("DONE SUCESSFULLY")
      }
  )
}
