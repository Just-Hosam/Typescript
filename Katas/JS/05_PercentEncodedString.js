"use strict";
// In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.
const urlEncode = (str) => {
    const trimmedStr = str.trim();
    return trimmedStr.replace(' ', '%20');
};
console.log(urlEncode('Lighthouse Labs'), '=== Lighthouse%20Labs');
console.log(urlEncode(' Lighthouse Labs '), '=== Lighthouse%20Labs');
console.log(urlEncode('blue is greener than purple for sure'), '=== blue%20is%20greener%20than%20purple%20for%20sure');
