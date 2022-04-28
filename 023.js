"use strict";

/*
    Given a positive integer n (0 < n < 1e6), remove the last digit until you're left with a
    number that is a multiple of three.
    Return n if the input is already a multiple of three, and return null if no such number exists.
    E.g.: prevMultOfThree(1) -> null
          prevMultOfThree(36) -> 36
          prevMultOfThree(1244) -> 12
*/

const prevMultOfThree = n => {
    while(n !== 0) {
        if(n % 3 === 0) {
            return n;
        }
        n = Math.floor(n / 10);
    }
    return null;
}

console.log(prevMultOfThree(1));
console.log(prevMultOfThree(36));
console.log(prevMultOfThree(1244));


// Different solution

const prev = n => {
    if(n === 0) return null;
    if(n % 3 === 0) return n;
    return prev(+n.toString().slice(0, -1));
}

console.log(prev(952406));