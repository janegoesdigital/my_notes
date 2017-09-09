var http = require('http');
var fs = require('fs');


//This adds content to a file - and creates it if it doesn't exist
fs.appendFile('mynewfile1.txt', 'Hello content!  Here is some more content', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


//This opens a file or creates it if it doesn't exist.
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


//This overwrites the content of a file - and creates it if it doesn't
fs.writeFile('mynewfile3.txt', "Change the content This content is coming from the demo read file",
function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('mynewfile3.txt', ' Here is new text appended to the file using the appendFile method.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

http.createServer(function (req, res) {
  fs.readFile('html_file.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
