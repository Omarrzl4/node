

const {readFile}=require("fs");
console.log("Start");

readFile("./content/omar.txt","utf8",(err,result)=>{
if(err){
   console.log(err);
}
console.log(result);
})

console.log("End");