const http = require('http');
const querystring = require ('querystring');
const url = ('url');
let students = require('./studentsdb');

function printStudent(student)
{
	let stringStudent ='';
	stringStudent += "Id : "+ student[0];
	stringStudent += " ,Name : "+ student[1];
	stringStudent += " ,Database : "+ student[2];
	stringStudent += " ,Web Service : "+ student[3];
	stringStudent += " ,Web Application : "+ student[4];
	stringStudent += "\n";
	return stringStudent;
}
function getStudents()
{
	let print = "";
	for(let i = 0; i<students.length; i++)
	{
		print += printStudent(Students[i]);
	}
	return print;
}
function searchStudent(id)
{
	let flag = false;
	let student = null;
	for(let i = 0; i<student.length; i++)
	{
		if (student[i][0] === id)
		{
			student = students[i];
			flag = true;
			break;
		}
	}
	
	if (flag == true)
	{
		return "student found name is "+student[1];
	}
	else
	{
		return "404 student not found";
	}
}
function  subjectAvgMarks(subjectId)
{
	let average = 0;
	for(let i =0; i< students.length; i++
	{
		average += students[i][subjectId];
	}
	return "Subject average is : "+ (average/students.length);
}
function studentRank()
{
	let total = 0;
	let maxTotal = 0;
	let firstRankStudent;
	for(let i=0; i< students.length; i++)
	{
		total = students[i][2]+students[i][3]+students[i][4];
		if(maxTotal < total)
		{
			firstRankStudent = students[i][0];
			maxTotal = total;
		}
	}
	return firstRankStudent;
}
http.createServer(function(request, response)
{
	let path = url.parse(request.url).pathname;
	let parsedUrl = url.parse(request.url);
	let parsedQs = querystring.parse(parsedUrl.query);
	let studentId = parsedQs["id"];
	let subjectId = parsedQs["sid"];
	//let rankId = parsedQs["rid"];
	
	if (path === "/allstudents")
	{
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(getStudents());
		response.end();
	}
	if (studentId != null)
	{
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(subjectAvgMarks(subjectId));
		response.end();
	}
	if (subjectId != null)
	{
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(getStudents());
		response.end();
	}
}).listen(8081);
console.log('Server is running at http://localhost:8081');