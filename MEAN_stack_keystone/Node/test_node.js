//

var fs = require('fs');
//

//This one imports the file synchronously - whatever that means
var someText = fs.readFileSync(
	__dirname + "/test.js",
	'utf8'
);

console.log( someText );

console.log("potato");




//this one imports it asynchrnolously - but I can't get anything to happen
fs.readFile(__dirname + "/test.js", "utf8", function (err, data) {
    // ERROR FIRST!
    if (err) {}
});

//This will take the content from another file and read it into this file
var readable = fs.createReadStream(__dirname + "/someFile.txt", {
		encoding: "utf8",
		highWaterMark: 1024
});

readable.on("data", function(chunk){
	console.log( chunk[1] );
});

var writable = fs.createWriteStream(__dirname + "/copy.txt");
readable.on("data", function(chunk){
	console.log( "From the second chunk: + " + chunk );
	writable.write( chunk);

});

var readable2 = fs.createReadStream(__dirname + "/someFile.txt", {
		encoding: "utf8",
		highWaterMark: 1024
});


readable2.on("data", function(chunk){
	console.log( "In the copy file" + chunk );
});
