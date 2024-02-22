const http = require('http');
const url = require('url');
http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.write(" Hello from node JS world !");
	response.end();
}).listen(8081);
console.log('Server running at http://localhost:8081');