"use strict";

/*
    Create a function that takes an array of numbers and returns both
    the minimum and the maximum numbers, in that order.
    E.g.: minMax([1, 2, 3, 4, 5]) -> [1, 5]
*/


const minMax = arr => {
    return new Array(Math.min(...arr), Math.max(...arr));
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([233, 5]));
console.log(minMax([1]));
