import React from "react";
import ReactDOM from "react-dom";

console.log("Hello Jane & Betty");

const weeksPerYear = 365/7;
const fortnightsPerYear = weeksPerYear / 2;
// console.log(fortnightsPerYear);


var yearsToFortnight = function(amount) {
	var calc = amount/fortnightsPerYear;
	var answer = parseInt(calc,10);
	return answer
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

	var income =
	{
		income: 98630,
		super	: 9369,
		fortnightlyPay: 2700
	};


	var deductions = {
		tax: 26098,
		medicare: 1972,
		superJane: 0,
	};

//this is fortnightly expenses
var expenses = {
	bills: 550,
	bernieSave: 550,
	janeSave:300,
	mastercard: 200,
	car: parseInt(750*12/fortnightsPerYear),
	phone: 100/2,
 	healthInsurance:120,
	carRegistration: parseInt(200*12/fortnightsPerYear),
	carInsurance: yearsToFortnight(584.07),
	carTolls: 50,
 	train:50,
 	petrol:30,
	fitnessFirst: 32.50,
	microsoft: parseInt(12*12/fortnightsPerYear),
	kennards: parseInt(42*12/fortnightsPerYear),
	fairfax: parseInt(25*12/fortnightsPerYear)
};


var DisplayFortnightlyExpenses = React.createClass({
	render: function(){
		var output = [];
		var output = Object.keys(expenses).map(function(keyName) {
			return <tr>
						<td> {keyName} </td>
						<td> {expenses[keyName]}</td>
						</tr>
		})
		return (
			<div>
				<h1> Fortnightly expenses </h1>
	         <table>
					 	<tr>
							<th>What </th>
							<th> Cost </th>
						</tr>
	            {output}
						<tr>
							<td> Total fortnightly expenses </td>
							<td> {totalExpenses}  </td>
						</tr>
						<tr>
							<td> Total fortnightly income </td>
							<td> 2700 </td>
						</tr>
						<tr>
							<td> Fortnightly spending  </td>
							<td> {netFortnightlyAfterExpenses} </td>
						</tr>
	         </table>
				</div>
	    )
}
});




var regularDeductions = [

			{
					what:"microsoft",
					amount: 12,
					frequency: "monthly",
					fortnightlyAmount: 12/2,
					date: 21,
					bank: "stGeorge"
			},
			{
				what:"teachersHealth",
				amount:119.20,
				frequency: "fortnightly",
				fortnightlyAmount: 119.20,
				bank: "stGeorge"
			},
		 {
				what: "carTolls",
				amount: "varies",
				frequency: "varies",
				bank: "stGeorge"
			},
		  {
				what: "kennards",
				amount: 42,
				frequency: "monthly",
				fortnightlyAmount: 42/2,
				date: 13,
				bank: "stGeorge"
			},
	  	{
				what: "iiNet",
				amount: 75.89,
				frequency: "monthly",
				fortnightlyAmount: 75.89/2,
				date: 28,
				bank: "stGeorge"
			},
			{
				what: "fairfax",
				amount: 25.22,
				fortnightlyAmount: 25.22/2,
				frequency: "monthly",
				bank: "stGeorge"
			},
			{
				what: "carLease",
				amount: 750,
				fortnightlyAmount: 750/2,
				frequency: "monthly",
				date: 24,
				bank: "ANZ"
			},
			{
				what: "appleItunes",
				amount: "various",
				frequency: "various",
				bank: "ANZ"
			},
			{
				what: "fitnessFirst"
,				amount: 30,
				fortnightlyAmount: 30/2,
				frequency: "fortnightly",
				bank: "ANZ"
			},
		];

var allDeductionsArray = [];
var anzDeductions = [];
var stGDeductions = []
//
function findCosts(element, index, regularDeductions, testBank) {
	var amount = element.amount;
	var fortnightlyAmount = element.fortnightlyAmount;
	var cost = element.what;
	var bankNow = element.bank;
		if ( typeof element.amount  === "number" ){
			allDeductionsArray.push(fortnightlyAmount);
			if ( bankNow === "ANZ") {
						anzDeductions.push(fortnightlyAmount)
						}
				else {
						stGDeductions.push(fortnightlyAmount)
				}
	}
}

regularDeductions.forEach(findCosts);
var allDeductions = allDeductionsArray.reduce((prev,curr) => prev+curr );
var allAnzDeductions = anzDeductions.reduce((prev,curr)=> prev+curr );
var allGDeductions = stGDeductions.reduce((prev,curr) => prev+curr );



var totalIncome = totalObject(income);
var fortnightlyIncome = parseInt(totalObject(income)/fortnightsPerYear);
var totalDeductions = totalObject(deductions);
var fortnightlyDeductions = parseInt(totalObject(deductions)/fortnightsPerYear);
var netIncome = totalIncome - totalDeductions;
var totalExpenses = totalObject(expenses);
var expensesAnnual = parseInt(totalObject(expenses) * fortnightsPerYear);

var netAnnualAfterExpenses = totalIncome - totalObject(deductions);
var netFortnightlyAfterExpenses = income.fortnightlyPay - totalExpenses;


var expenseArray = Object.keys(expenses);
// console.log("Expenses covered" + expenseArray);


// console.log("Spending: " + spending );



ReactDOM.render(
  <div>
		<p>Here are some straight words </p>
		<DisplayFortnightlyExpenses />
		<table>
  		<tr>
		    <th>What</th>
		    <th>Annual</th>
				<th>Fortnightly</th>
		  </tr>
			<tbody>
		  <tr>
		    <td>Total income</td>
		    <td>${totalIncome}</td>
				<td>${fortnightlyIncome}</td>
		  </tr>
			<tr>
		    <td>Total annual deductions</td>
		    <td>${totalDeductions}</td>
				<td> ${fortnightlyDeductions} </td>
		  </tr>
			<tr>
		    <td>Total annual net income</td>
		    <td>${netIncome}</td>
				<td> ${income.fortnightlyPay}</td>
		  </tr>
			<tr>
		    <td>Fortnightly  income</td>
		    <td>NA</td>
				<td> ${income.fortnightlyPay}</td>
		  </tr>
			<tr>
		    <td>Fortnightly expenses</td>
		    <td>$</td>
				<td>${totalObject(expenses)} </td>
		  </tr>
			<tr>
		    <td>Net income after expenses</td>
				<td>{netAnnualAfterExpenses}</td>
		    <td>${netFortnightlyAfterExpenses}</td>
		  </tr>
		</tbody>
		</table>

		<h1>Transfers</h1>
		<p>To transfer fortnightly for:

		<table>
			<tr>
				<th>What?</th>
				<th>How much? </th>
				<th> Where to? </th>
			</tr>
			<tbody>
			<tr>
				<td>Car lease</td>
				<td> {expenses.car} </td>


			</tr>
			<tr>
				<td>Fitness first</td>
				<td> {expenses.fitnessFirst} </td>
			</tr>
			</tbody>
		</table>

		<h1> Automatic deductions </h1>
		<p>All regular fortnightly payments for automatic deductions {allDeductions} </p>
		<p>ANZ fortnightly payments  {allAnzDeductions} </p>
		<p>St George fortnightly payments {allGDeductions} </p>
		 </p>

		<h1> Payments </h1>

	<table>
	 <tr>
		 <th>What?</th>
		 <th>How much? </th>
		 <th> Where to? </th>
	 </tr>

	 <tbody>
	 <tr>
		 <td>Bills</td>
		 <td> {expenses.bills} </td>
		 <td> ANZ </td>
	 </tr>
	 <tr>
		 <td>Save with Bernie</td>
		 <td> {expenses.bernieSave} </td>
		 <td> ANZ </td>
	 </tr>
	 <tr>
		 <td>Save for Jane</td>
		 <td> {expenses.janeSave} </td>
		 <td> St George </td>
	 </tr>
	 <tr>
		 <td>Pay off mastercard</td>
		 <td> {expenses.mastercard} </td>
		 <td> ME </td>
	 </tr>
	 <tr>
		 <td>Save for car renewal</td>
		 <td> {expenses.carRegistration + expenses.carInsurance} </td>
		 <td> St George </td>
	 </tr>

	 </tbody>
	</table>

	<h1> Spending </h1>
	<p> To spend each fortnight ${netFortnightlyAfterExpenses} </p>



  </div>,
  document.querySelector("#container")
);
