// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = (str: string): number => {
	const lowerCaseStr = str.toLowerCase();
	let counter = 0;

	for (const char of lowerCaseStr) {
		if (
			char === 'a' ||
			char === 'e' ||
			char === 'i' ||
			char === 'o' ||
			char === 'u'
		) {
			counter++;
		}
	}

	return counter;
};

console.log(numberOfVowels('orange'), '=== 3');
console.log(numberOfVowels('lighthouse labs'), '=== 5');
console.log(numberOfVowels('aeiou'), '=== 5');
