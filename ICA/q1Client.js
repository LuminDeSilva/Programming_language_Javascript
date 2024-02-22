var http = require('http');
var options = {
	host: 'localhost', port: '8081', path: '/welcomemsg'
};
var callback = function (response){
	var body = '';
	response.on('data',function(data){
		body += data;
	});
	response.on('end', function () {
		console.log(body);
	});
	response.on('error', (error) => {
		console.error(eror);
	});
}
var req = http.request(options, callback);
req.end();