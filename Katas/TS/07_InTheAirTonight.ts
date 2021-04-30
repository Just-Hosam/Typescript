// The new smart parking lot in Codeville was a big hit! Next on your list to tackle is the air quality. You've decided that you want to install air pollution sensors around the city to monitor air quality and identify problem areas. We need to write the code for the sensors to trigger a special message when the air is too polluted.

const checkAir = (samplesArr: string[], threshold: number): string => {
	let dirtyCount: number = 0;
	samplesArr.forEach((elem) => (elem === 'dirty' ? dirtyCount++ : null));

	const pollutionRatio: number = dirtyCount / samplesArr.length;
	const isPolluted: boolean = pollutionRatio > threshold;

	return isPolluted ? 'Polluted' : 'Clean';
};

console.log(
	checkAir(
		[
			'clean',
			'clean',
			'dirty',
			'clean',
			'dirty',
			'clean',
			'clean',
			'dirty',
			'clean',
			'dirty',
		],
		0.3
	),
	'=== Polluted'
);

console.log(
	checkAir(['dirty', 'dirty', 'dirty', 'dirty', 'clean'], 0.25),
	'=== Polluted'
);

console.log(
	checkAir(
		['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
		0.9
	),
	'=== Clean'
);
