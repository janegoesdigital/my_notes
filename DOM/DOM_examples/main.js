console.log("hello betty.  Here is the file");

console.log("Document state using DOM", document.readyState);

console.log("All the links", document.links);

//The whole document sent by a browser is an object.

var docObject = document;
console.log("Whole object: ", document);

var docBody = document.body;
console.log("Just the body", docBody);

//All we are doing, is therefore using the built in browser methods to manipulate the document object,
//using object notation on the document object ie document.getElementsByTagName

//select an element - different ways of doing it.  This one is just selecting it by tag name.
// Can do by class, id, or other specific query selectors

var theDom = document.getElementsByTagName("p");
console.log("All ps", theDom);

//innerHTML method will retreive the innterHTML.  Can also replace it

console.log("Retrieve the innerHTML:", theDom[2].innerHTML);

//Replace the innerHTML

theDom[5].innerHTML = "Replacement text.  Woo hoo";

//Another pattern for replacing the text

var changeText = document.getElementById("change");
var newText = "Here is a different pattern for replacing some text - putting the text in a variable";
console.log("Change text", changeText);
changeText.innerHTML = newText;

// This is a method for adding text.  It will go right down to the bottom of the page.  I'm not sure
// if you're supposed to add html here

document.write(Date());

document.write("<p>Humphry</p>");

//This adds text using the append thing

var newPara = document.createElement("h1");
var newNode = document.createTextNode("This is the new h1 created by the javascript file");
//add the text to the element
newPara.appendChild(newNode);
var element = document.getElementById("addMe");
// add the element to the page AFTER the node (ie the div)  Will go to the last node on the div.
//if wan't to put it higher up select a the node that what want to add it before, and use insertBefore - see below
element.appendChild(newPara);

//use this to add the new paragraph BEFORE the child node 
var element = document.getElementById("addMe");
var child = document.getElementById("p1");
console.log("child:", child);
// element.insertBefore(newPara, child);
