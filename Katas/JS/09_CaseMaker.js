"use strict";
// In this exercise, we will be converting a normal string into camelCase text.
const camelCase = (inputStr) => {
    let camelStr = '';
    for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === ' ') {
            i++;
            camelStr += inputStr[i].toUpperCase();
            continue;
        }
        camelStr += inputStr[i];
    }
    return camelStr;
};
console.log(camelCase('this is a string'), '=== thisIsAString');
console.log(camelCase('loopy lighthouse'), '=== loopyLighthouse');
console.log(camelCase('supercalifragalisticexpialidocious'), '=== supercalifragalisticexpialidocious');
