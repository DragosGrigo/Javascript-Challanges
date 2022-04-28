"use strict";

// Create a function that mimics the LEFT SHIFT OPERATOR (<<)
// E.g. 10 << 3  =  80

const shiftToLeft = (x, y) => {
    return x * (2 ** y);
}

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(-32, 2));
console.log(shiftToLeft(-6, 5));
console.log(shiftToLeft(46, 6));