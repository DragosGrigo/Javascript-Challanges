"use strict";

/*
    Given an input of an array of digits, return the array with each digit
    incremented by its position in the array: the first digit will be 
    incremented by 1, the second by 2, etc.
    Make sure to start counting your positions from 1.
    Your result can only contain single digit numbers, so if adding a digit
    with it's position gives you a multiple-digit number, only the last
    digit of the number should be returned.
    E.g.: [4, 6, 9, 1, 3] -> [5, 8, 2, 5, 8]
*/


function incrementer(nums) {
    function incremNewArray(a, i) {
        return (a + i + 1) % 10;
    }
    return nums.map(incremNewArray);
}

console.log(incrementer([1, 2, 3]));
console.log(incrementer([4, 6, 7, 1, 3]));
console.log(incrementer([3, 6, 9, 8, 9]));
console.log(incrementer([2, 4, 6, 2, 7, 5, 4]));
console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]));





