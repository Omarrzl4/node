const {readFile}=require("fs").promises;



 

const start=async()=>{
    try{
   const f=await readFile("./content/omar.txt","utf8");
   const s=await readFile("./content/omar2.txt","utf8");

   console.log(f);
   console.log(s);

    }
    catch(err){
     console.log(err);
    }
}
start();