console.log("Jane and Betty ride again!");

var form = document.getElementById("myForm");
console.log(form);

form.addEventListener(
	"click",
	function(event){
		event.preventDefault()
	},
	console.log("you've been clicked!"),
	false
);


// console.log(document.getElementById("dataField").value);

var submitButton = document.getElementById("submitButton");

submitButton.addEventListener(
  "click",
		console.log(document.getElementById("dataField").value),
// 		function(event){
// 			event.preventDefault()
// 		},
// console.log("here I am"),
false);
