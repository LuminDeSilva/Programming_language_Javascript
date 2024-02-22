 const express = require('express');
 let students = require('./DB/studentsdb.js');
 const PORT=8080;
 const app = express();
 
 
 //add new student			- POST
 //update the new student	- PUT
 //delete the student		- DELETE 
 //search the students		- get
 
 //1. return all thye student details
 app.get('/student/:id',(req,res)=>{
	 return res.status(200).json(students);
 });
 
//2. return the student for given student id
app.get('/student:id',(req,res)=>{
	let id=req.params.id;
	let myStudent=null;
	myStudent = students.filter((student)=>student.id == id);
	if(myStudent[0] == null)
	{
		return res.status(404).json({"message":"Student Not Found"});
	}
	else{
		return res.status(200).json(myStudent[0]);
	}
});
	/*students.forEach(student=>{
		if(id==student['id'])
		{
			myStudent = student;
		}
	});
	if(myStudent == null)
	{
		return res.status(404).json({"message":"Student Not Found"});
	}
	else
	{
		return res.status(200).json(students);
	}*/
	//return res.status(200).json({"message":"Not Found"});

 app.listen(PORT,()=>console.log("Server is running"));