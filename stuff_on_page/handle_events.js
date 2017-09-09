console.log("Jane and Betty ride again!");


// Selecting a button and doing something when it is clicked - events - use event listeners

var button = document.getElementById("counter");
console.log("Button", button)


var addText = function(){
	var newPara = document.createElement('h3');
	var text = document.getElementById("dataField").value
	var newNode = document.createTextNode(text);
	newPara.appendChild(newNode);
	var element = document.getElementById("inputOnPage");
	element.appendChild(newPara);
};

var changeText = function (message){
	var userInput = document.getElementById("dataField").value;
	var message = userInput;
	button.innerHTML = message;
};

// changeText("woof");

var message = "pink";

//have to use an anonymous function if want to pass a parameter to the function

button.addEventListener('click',
	function(){
		changeText(message)
	},
	false);

	button.addEventListener('click',
		function(){
			addText()
		},
		false);


	function modifyText() {
	  var t2 = document.getElementById("t2");
		// console.log(t2);
	  if (t2.firstChild.nodeValue == "three") {
	    t2.firstChild.nodeValue = "two";
	  } else {
	    t2.firstChild.nodeValue = "three";
	  }
	}
	var el = document.getElementById("outside");
	el.addEventListener("click", function(){modifyText("two")}, false);
