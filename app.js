 const {readFile}=require("fs");

 const first=readFile("./content/omar.txt","utf8",(err,res)=>{
   if(err){
      console.log(err);
   }
   if(res){
      console.log(res);
   }
 })

 const second=readFile("./content/omar2.txt","utf8",(err,res)=>{
   if(err){
      console.log(err);
   }
   if(res){
      console.log(res);
   }
 })