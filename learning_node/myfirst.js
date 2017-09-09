console.log("are we ready!");

var http = require('http');
// console.log("HTTP:", http);

var dt = require("./myfirstmodule");
console.log("DT", dt);

var uc = require('upper-case');


http.createServer(function (req, res) {
		console.log("Request:", req.on);
    res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("Here is some more text");
		res.write(uc("The date and time are currently: " + dt.myDateTime()));
		console.log("DT", dt.myDateTime());
  	res.end;
}).listen(8080);
