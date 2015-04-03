// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
var static_contents = require('./static.js')
// creating a server using http module:
var server = http.createServer(function(request, response){
	// see what URL the clients are requesting:
	console.log('client request URL: ', request.url);
	static_contents(request, response);

});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");