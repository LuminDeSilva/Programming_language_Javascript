var net = require("net");
var server = net.createServer(function(connection){
	console.log('client connected.');
	connection.on('end',function(){
		console.log('Client disconnected.');
	});
	connection.write('Hello World!\n');
	connection.pipe(connection);
		//send back to connection object with is client
});
server.listen(8080,function(){
	console.log('server is listening.');
});
console.log('Server program Ended');