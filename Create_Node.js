var http = require('http'); 	//1 - import Node.js core module
var server = http.createServer(function (req, res) 	//2 - creating server
{
	//handle incoming requests here...
});
server.listen(3000); 	//3 - listen for any incomming requests
console.log('Node.js web server at port 3000 is running...')