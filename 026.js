"use strict";

/*
    A Narcissistic Number is a positive number which is the sum of its own digits,
    each raised to the power of the number of digits in a given base.
    Your code must return true or false depending upon whether 
    the given number is a Narcissistic number in base 10.
    Error checking for text strings or other invalid inputs is not required,
    only valid positive non-zero integers will be passed into the function.
    E.g.: narcissistic(153) -> true
          narcissistic(371) -> true
          narcissistic(1652) -> false
*/

function narcissistic(value) {
    let valueStringed = value.toString().split("");
    let valueLength = valueStringed.length;
    let sum = 0;
    valueStringed.forEach(val => sum += val ** valueLength)
    return value === sum;
}

console.log(narcissistic(153));
console.log(narcissistic(371));
console.log(narcissistic(1652));