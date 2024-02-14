   
 const http=require("http");

 const load=http.createServer((req,res)=>{
  if(req.url==="/"){
   res.write("This is the home page");
   res.end();

  }
  if(req.url==="/about"){
   res.write("This is the about");
   res.end();
  }
    res.end("Page is not found");
})
    load.listen(5000);

 