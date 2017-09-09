var http = require('http');



//create a server object:
http.createServer(function (req, res) {
	console.log("Request",req.url);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url);
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
