"use strict";
let log = function (message) {
    console.log(message);
};
let doLog = (message) => console.log(message);
// very verbose
let drawPoint = (pointObj) => { };
// better implementation
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log('X:' + this._x + '  Y:' + this._y);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error('Value cannot be less than zero');
        this._x = value;
    }
}
let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
