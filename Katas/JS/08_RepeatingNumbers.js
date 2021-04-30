"use strict";
// The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:
// [[1, 2], [2, 3]]
// The first will be the value to repeat, the second will be the amount of times to repeat that value.
const repeatNumbers = (arr) => {
    let finalStr = '';
    for (const elem of arr) {
        if (finalStr !== '')
            finalStr += ', ';
        for (let i = 0; i < elem[1]; i++) {
            finalStr += `${elem[0]}`;
        }
    }
    return finalStr;
};
console.log(repeatNumbers([[1, 10]]), '=== 1111111111');
console.log(repeatNumbers([
    [1, 2],
    [2, 3],
]), '=== 11, 222');
console.log(repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
]), '=== 10101010, 343434343434, 9292');
