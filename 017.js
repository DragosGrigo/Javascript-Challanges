"use strict";

/*
    Given an array of integers, find the one that appears an odd number of times.
    There will always be only one integer that appears an odd number of times.
    E.g.: [7] -> [7]
          [1, 1, 2] -> [2]
          [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] -> [4]
*/

function findOdd(arr) {
    for(let i = 0; i < arr.length; i++) {
        let count = arr.filter(value => value === arr[i]).length;
        if(count % 2 === 1) {
            return arr[i];
        }
    }
}

console.log(findOdd([1, 1, 2]));
console.log(findOdd([7]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));