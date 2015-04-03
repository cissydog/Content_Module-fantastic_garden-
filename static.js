module.exports = function(request, response)
{
	var fs = require('fs');
	var path = require('path');
	var pathParse = path.parse(request.url);
	if(pathParse.ext === ''){
		fs.readFile('view/homepage.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
			response.write(contents);  //  send response body
			response.end(); // finished!
		});
	}
	else if(pathParse.ext === '.html')
		{
			fs.readFile('view'+pathParse.dir+'/'+pathParse.base, function(error, contents){
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.write(contents);
				response.end();
			});
		}
	else if(pathParse.ext === '.css'){
		fs.readFile('stylesheets/'+pathParse.base, 'utf8', function(error, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if(pathParse.ext === '.jpg')
		{
			fs.readFile('image/'+pathParse.base, function(error, contents){
				response.writeHead(200, {'Content-Type': 'image/jpg'});
				response.write(contents);
				response.end();
			});
		}

	else{
		response.writeHead(404);
		response.end('File not found!!!');
	}
	
}