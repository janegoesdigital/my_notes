console.log("Jane and Betty ride again!");


// Selecting a button and doing something when it is clicked - events - use event listeners

var button = document.getElementById("counter");
console.log("Button", button)

var changeText = function (){
	button.innerHTML = "hello";
};

button.addEventListener('click', changeText, false);


//Getting the data out of the form

// var firstValue = document.getElementById("dataField").value;
// console.log("The value from the form on loading:", firstValue);

// var userValue = function(){
// 	addedValue = document.getElementById("myform").dataField.value;
// 	var newPara = document.createElement("p");
// 	var newNode = document.createTextNode("This is the new paragraph created by the javascript file");
// 	newPara.appendChild(newNode);
// 	var element = document.getElementById("output");
// 	element.appendChild(newPara);
// 	addedValue = document.getElementById("dataField").value;
// 		console.log("Added value within the function ie when clicked", addedValue);
// 	return addedValue;
// }
//
//
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click', userValue, false);
