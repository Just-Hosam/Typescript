let log = function (message: string) {
	console.log(message);
};

let doLog = (message: string) => console.log(message);

// very verbose
let drawPoint = (pointObj: { x: number; y: number }) => {};

// better implementation
class Point {
	constructor(private _x?: number, private _y?: number) {}

	draw() {
		console.log('X:' + this._x + '  Y:' + this._y);
	}

	get x() {
		return this._x;
	}

	set x(value) {
		if (<number>value < 0) throw new Error('Value cannot be less than zero');
		this._x = value;
	}
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
