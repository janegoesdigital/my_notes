console.log("Jane and Betty ride again!");

console.log(document);

var el = document.getElementById("addText");
console.log(el);

//Add text to page - the pattern
// var newPara = document.createElement("p");
// var newNode = document.createTextNode("This is the new paragraph created by the javascript file");
// newPara.appendChild(newNode);
// var element = document.getElementById("addText");
// // add the element to the page AFTER the node (ie the div)  Will go to the last node on the div.
// //if wan't to put it higher up select a the node that what want to add it before, and use insertBefore - see below
// element.appendChild(newPara);

//Here is a function I wrote to add the text to the page

var addText = function(elementName, text, targetElement){
	var newPara = document.createElement("p");
	var newNode = document.createTextNode(text);
	newPara.appendChild(newNode);
	var element = document.getElementById(targetElement);
	element.appendChild(newPara);
}

var message = "here is the text I would like to put on the page";
var message2 = "here is some more text I would like to put on the page";

addText("h1", message2, "name");
addText("p", message, "name");
addText("h2", message, "name");
