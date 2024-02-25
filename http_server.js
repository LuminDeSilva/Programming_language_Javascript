var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (request, response)
{
	var pathname = url.parse(request.url).pathname;
	console.log('Request for ' + pathname + ' received.');
	fs.readFile(pathname.substring(1), function (err, data)
	{
		if (err)
		{
			console.log(err.stack);
			response.writeHead(404, {'Content-Type' : 'text/html'});	
			//HTTP status: 404 : NOT FOUND
		}
		else
		{
			response.writeHead(200, {'Content-Type' : 'text/html'});	
			//HTTP status: 200 : OK
			response.write(data.toString());
		}
		response.end();		//send the response body
	});
}).listen(8081);
console.log('server running at http://127.0.0.1:8081/test.html');
console.log('Server program Ended');