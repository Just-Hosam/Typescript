// In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

type Instructor = {
	name: string;
	course: string;
};

const instructorWithLongestName = (instructosArr: Instructor[]): Instructor => {
	let nameLength = 0;
	let longNameInstructor: Instructor = {
		name: 'Hosam',
		course: 'Test',
	};

	for (const instructor of instructosArr) {
		if (instructor.name.length > nameLength) {
			nameLength = instructor.name.length;
			longNameInstructor = instructor;
		}
	}

	return longNameInstructor;
};

console.log(
	instructorWithLongestName([
		{ name: 'Samuel', course: 'iOS' },
		{ name: 'Jeremiah', course: 'Web' },
		{ name: 'Ophilia', course: 'Web' },
		{ name: 'Donald', course: 'Web' },
	]),
	'=== {name: "Jeremiah", course: "Web"}'
);
console.log(
	instructorWithLongestName([
		{ name: 'Matthew', course: 'Web' },
		{ name: 'David', course: 'iOS' },
		{ name: 'Domascus', course: 'Web' },
	]),
	'=== {name: "Domascus", course: "Web"}'
);
