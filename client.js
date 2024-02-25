var net = require("net");
var client = net.connect({port:8080},'localhost',function(){
	console.log('Connected to server.');
});
client.on('data',function(data){
	console.log(data.toString());
	client.end();
});

client.on('end',function(){
	console.log('Disconnected from server');
});
console.log('Client program ended');
