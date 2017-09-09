var http = require('http');
var moduleFile = require('./module');

moduleFile();




//var moduleObject = moduleFile();

// console.log("weeks per year", data.weeksPerYear);

http.createServer(function (req, res) {
		var data = moduleFile();
		console.log("data:", data);
	  res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("Here are the number of weeks" + data.income.income);
    res.end('....!');
}).listen(8080);
