//Do them all weekly

var module = function(){

const weeksPerYear = 365/7;
// console.log(weeksPerYear);
const fortnightsPerYear = weeksPerYear /2;


var yearsToFortnight = function(amount) {
var calc = amount/fortnightsPerYear;
var answer = parseInt(calc,10);
return answer;
};

var yearsToWeeks = function(amount) {
var calc = amount/weeksPerYear;
var answer = parseInt(calc,10);
return answer;
};

var fortnightToMonths = function(amount){
	var calc = amount * fortnightsPerYear/12;
	var answer = parseInt(calc,10);
	return answer;
};


var weeksToMonths = function(amount){
	var calc = amount * weeksPerYear/12;
	var answer = parseInt(calc,10);
	return answer;
};


var monthsToFortnight = function(amount ){
	var calc = amount * 12 / fortnightsPerYear;
	var answer = parseInt(calc,10);
	return answer;
};

var monthsToWeeks = function(amount){
	var calc = amount * 12 / 52;
	var answer = parseInt(calc,10);
	return answer;
};

var fortnightsToWeeks = function(amount){
	var calc = amount/2;
	var answer = parseInt(calc,10);
	return answer;
};

var daysToYears = function(amount) {
var calc = amount * 365;
return calc;
};


	var totalObject = function(expenseObject){
		var expenseArray = [];
		for (var prop in expenseObject) {
			var expense =  expenseObject[prop];
			expenseArray.push(expense);
			}
		// console.log(expenseArray);
			var sum = expenseArray.reduce(function(a, b) {
				return a + b;
			},0);
			return sum.toFixed(2);
		};

	// var actualExpenses = totalObject(expenses);

	var income =
	{
		income: 98630,
		super	: 9369
	};

	var deductions = {
		tax: 26098,
		medicare: 1972,
		superJane: 0,
	};



console.log(income );




var netIncome = income.income - totalObject(deductions);
console.log("Your net annual income - after tax, standard super and medicare is: $" + netIncome);

var fortnightlyIncome = yearsToFortnight(netIncome);
console.log("Fortnightly income after tax, medicare and $25K super: $ 	" + fortnightlyIncome);

// // Personal expenses per fortnight
//
var expenses = {
 // carLease:parseInt(monthsToFortnight(745),10),
 carLease: 256,
 phone: parseInt(monthsToFortnight(100),10),
 health:120,
 train:50,
 petrol:50,
 // mastercard:300,
 jointAccountBills:550,
 jointAccountSave:550
 // storage:40
};

console.log(expenses);
console.log("Lease " + expenses.carLease);

var fixedExpenses = totalObject(expenses);
console.log("Total fortnightly fixed expenses: " + fixedExpenses);

var netAfterExpenses = fortnightlyIncome - fixedExpenses;
console.log("After expenses you have forntightly $" + netAfterExpenses);
//
//
// //
var spendSave = {
	saveBen: 150,
	spend: 400,
	mastercardExtra: 0,
	janeSave: 500,
};
//
console.log("Fortnightly savings and spending plan:");
console.log(spendSave);
var totalSpending = totalObject(spendSave);
console.log("Your total fortnightly spending and saving  is: $" + totalSpending);
//
var budget = fortnightlyIncome - fixedExpenses - totalSpending;
//
console.log("Your net budget position is $" + budget + " per fortnight");

console.log("Salary is being deposited into St George account")

console.log("Need to transfer to ANZ for car the following amount per fortnight: $" + expenses.carLease);
//
var totalSavings = expenses.jointAccountSave + spendSave.saveBen + spendSave.janeSave;
console.log("Your total fortnightly savings are " + totalSavings);
//
console.log("Your personal fortnightly savings are: $" + spendSave.janeSave);

var annualSavings = function(amount){
	var saves = amount * fortnightsPerYear;
	return saves;
};
//
console.log("Your annual personal savings is " + parseInt(annualSavings(spendSave.janeSave)),10);
console.log("Your total annual savings with Bernard is $" + parseInt((annualSavings(expenses.jointAccountSave) * 2),10));
console.log("Your savings for Ben is $" + parseInt(annualSavings(spendSave.saveBen),10));

var mastercard = expenses.mastercard + spendSave.mastercardExtra;
console.log("Your fortnightly spend on debt is: $" + mastercard);

var currentDebt = 7500;

var debtTerm = (currentDebt/mastercard).toFixed(2);
console.log("It will take you this many fortnights to pay off your mastercard: " + debtTerm);

};

exports.module;
