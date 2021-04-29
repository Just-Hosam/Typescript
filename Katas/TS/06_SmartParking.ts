// Welcome back to Codeville! The citizens of Codeville seem pleased with all the upgrades your administration has been making to the local infrastructure, and they want more! The parking lot in the Codeville Devtropolis Shopping Mall needs an upgrade, and you've decided this is the perfect opportunity to install a smart parking system.

// The system will use special parking sensors to keep track of all parking spots and monitor which ones are available. Every time a vehicle enters the parking lot, the system directs them to an available spot for their particular vehicle type, or notifies them that no spots are available.

type ParkingFunc = (a: string[][], b: string) => [number, number] | boolean;

const whereCanIPark: ParkingFunc = (spots, vehicle) => {
	let possibleSpots: string[] = [];
	if (vehicle === 'regular') possibleSpots = ['R'];
	if (vehicle === 'small') possibleSpots = ['R', 'S'];
	if (vehicle === 'motorcycle') possibleSpots = ['R', 'S', 'M'];

	for (const row of spots) {
		for (const column of row) {
			const rowIndex: number = spots.indexOf(row);
			const columnIndex: number = row.indexOf(column);

			if (possibleSpots.includes(column)) return [columnIndex, rowIndex];
		}
	}

	return false;
};

console.log(
	whereCanIPark(
		[
			['s', 's', 's', 'S', 'R', 'M'],
			['s', 'M', 's', 'S', 'r', 'M'],
			['s', 'M', 's', 'S', 'r', 'm'],
			['S', 'r', 's', 'm', 'r', 'M'],
			['S', 'r', 's', 'm', 'r', 'M'],
			['S', 'r', 'S', 'M', 'M', 'S'],
		],
		'regular'
	),
	'=== [4, 0]'
);

console.log(
	whereCanIPark(
		[
			['M', 'M', 'M', 'M'],
			['M', 's', 'M', 'M'],
			['M', 'M', 'M', 'M'],
			['M', 'M', 'r', 'M'],
		],
		'small'
	),
	'=== false'
);

console.log(
	whereCanIPark(
		[
			['s', 's', 's', 's', 's', 's'],
			['s', 'm', 's', 'S', 'r', 's'],
			['s', 'm', 's', 'S', 'r', 's'],
			['S', 'r', 's', 'm', 'r', 's'],
			['S', 'r', 's', 'm', 'R', 's'],
			['S', 'r', 'S', 'M', 'm', 'S'],
		],
		'motorcycle'
	),
	'=== [3, 1]'
);
