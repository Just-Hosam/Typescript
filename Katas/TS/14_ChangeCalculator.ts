// In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

type returnedCash = {
	twentyDollar?: number;
	tenDollar?: number;
	fiveDollar?: number;
	twoDollar?: number;
	oneDollar?: number;
	quarter?: number;
	dime?: number;
	nickel?: number;
	penny?: number;
};

type changeObj = { change: number; returnObj: returnedCash };

enum bill {
	twentyDollar = 'twentyDollar',
	tenDollar = 'tenDollar',
	fiveDollar = 'fiveDollar',
	twoDollar = 'twoDollar',
	oneDollar = 'oneDollar',
	quarter = 'quarter',
	dime = 'dime',
	nickel = 'nickel',
	penny = 'penny',
}

const calculateChange = (total: number, cash: number): returnedCash | 'MORE MONEY PLS' => {
	const changeObj: changeObj = {
		change: cash - total,
		returnObj: {},
	};

	if (changeObj.change < 0) return 'MORE MONEY PLS';
	if (changeObj.change > 2000) changeAdjustor(changeObj, 2000, bill.twentyDollar);
	if (changeObj.change > 1000) changeAdjustor(changeObj, 1000, bill.tenDollar);
	if (changeObj.change > 500) changeAdjustor(changeObj, 500, bill.fiveDollar);
	if (changeObj.change > 200) changeAdjustor(changeObj, 200, bill.twoDollar);
	if (changeObj.change > 100) changeAdjustor(changeObj, 100, bill.oneDollar);
	if (changeObj.change > 25) changeAdjustor(changeObj, 25, bill.quarter);
	if (changeObj.change > 10) changeAdjustor(changeObj, 10, bill.dime);
	if (changeObj.change > 5) changeAdjustor(changeObj, 5, bill.nickel);
	if (changeObj.change > 1) changeAdjustor(changeObj, 1, bill.penny);

	return changeObj.returnObj;
};

const changeAdjustor = (changeObj: changeObj, billValue: number, billKey: bill): void => {
	const numberOfBills = Math.floor(changeObj.change / billValue);
	changeObj.returnObj[billKey] = numberOfBills;
	changeObj.change %= billValue;
};

console.log(calculateChange(1787, 2000), '=== { twoDollar: 1, dime: 1, penny: 3 }');
console.log(
	calculateChange(2623, 4000),
	'=== { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }'
);
console.log(calculateChange(501, 1000), '=== { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }');
