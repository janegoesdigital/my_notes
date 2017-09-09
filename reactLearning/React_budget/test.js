
var expenses = {
	bills: 550,
	bernieSave: 550,
	janeSave:300,
	mastercard: 200,
	phone: 100/2,
 	healthInsurance:120,
	carTolls: 50,
 	train:50,
 	petrol:30,
	fitnessFirst: 32.50,
};

for (var prop in expenses) {
	console.log(prop + " : " + expenses[prop]);
	// console.log(expenses[prop]);

}

Object.keys(expenses).map(function(keyName, keyIndex) {
	console.log(keyName);
	console.log(keyIndex);
	console.log(expenses[keyName]);
  // use keyName to get current key's name
  // and a[keyName] or a.keyName to get its value
})

a = {
  a: 1,
  b: 2,
  c: 3
}

Object.keys(a).map(function(keyName, keyIndex) {
	console.log(keyName);
	console.log(keyIndex);
	console.log(a[keyName]);
  // use keyName to get current key's name
  // and a[keyName] or a.keyName to get its value
})
