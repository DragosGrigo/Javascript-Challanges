"use strict";

/*
    Given an integer number, determine if it's a square number.
    E.g.: isSquare(-1) -> false
          isSquare(4) -> true
          isSquare(5) -> false
*/

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0 ? true : false;
}

console.log(isSquare(5));
console.log(isSquare(0));
console.log(isSquare(-1));


// Different solution

const numberSquare = x => {
    return Number.isInteger(Math.sqrt(x)) ? true : false;
}

console.log(numberSquare(9));
console.log(numberSquare(12));