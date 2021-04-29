// For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = (arr: number[], condition: string): number => {
	let sum = 0;

	for (const elem of arr) {
		if (condition === 'even' && elem % 2 === 0) sum += elem;
		if (condition === 'odd' && elem % 2 !== 0) sum += elem;
	}

	return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'), '=== 6');
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'), '=== 9');
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'), '=== 144');
console.log(conditionalSum([], 'odd'), '=== 0');
