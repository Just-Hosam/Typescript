"use strict";
// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.
const sumLargestNumbers = (arr) => {
    const firstNum = Math.max(...arr);
    let secondNum = 0;
    arr.forEach((elem) => {
        if (elem > secondNum && elem !== firstNum)
            secondNum = elem;
    });
    return firstNum + secondNum;
};
// alternative logic
const sumLargestNumbersAlt = (arr) => {
    const arrCopy = [...arr];
    const firstNum = Math.max(...arrCopy);
    arrCopy.splice(arrCopy.indexOf(firstNum), 1);
    const secondNum = Math.max(...arrCopy);
    return firstNum + secondNum;
};
console.log(sumLargestNumbers([1, 10]), '=== 11');
console.log(sumLargestNumbers([1, 2, 3]), '=== 5');
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]), '=== 126');
console.log(sumLargestNumbersAlt([1, 10]), '=== 11');
console.log(sumLargestNumbersAlt([1, 2, 3]), '=== 5');
console.log(sumLargestNumbersAlt([10, 4, 34, 6, 92, 2]), '=== 126');
