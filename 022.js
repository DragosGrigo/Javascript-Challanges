"use strict";

/*
    Remove the duplicates from a list of integers, keeping the last occurence of each element.
    E.g.: solve([3, 4, 4, 3, 6, 3]) -> [4, 6, 3]
*/

function solve(arr) {
    return arr.filter((value, index) => arr.lastIndexOf(value) === index);
}

console.log(solve([3,4,4,3,6,3]));
console.log(solve([1,2,1,2,1,2,3]));
console.log(solve([1,1,4,5,1,2,1]));


// Different solution

function solve1(arr) {
    return [...new Set(arr.reverse())].reverse();
}

console.log(solve([1,1,4,5,1,2,1]));



