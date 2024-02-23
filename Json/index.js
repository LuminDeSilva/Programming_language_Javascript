 const express = require("express");
 const PORT=8080;
 const app = express();
 
 app.get('/hellomsg',(req,res)=>{
	 return res.status(200)
	 .json({"message":"Hello from express world"});
 });
 
 app.get('/myname/:name',(req,res)=>{
	 let name = req.params.name;
	 return res.status(200)
	 .json({"message":"My name is "+name+" !"});
 });
 
 app.listen(PORT,()=>console.log("Server is running"));