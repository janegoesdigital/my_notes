module.exports  = function(){
	const weeksPerYear = 365/7;
	const fortnightsPerYear = weeksPerYear /2;
	var monthsToFortnight = function(amount ){
		var calc = amount * 12 / fortnightsPerYear;
		var answer = parseInt(calc,10);
		return answer;
	};
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

	return { weeksPerYear: weeksPerYear,
		fortnightsPerYear: fortnightsPerYear,
		income: income,
		deductions: deductions,
		expenses: expenses
}
};



//
