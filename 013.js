"use strict";

/*
    Create a function named "divisors" that takes an integer n > 1 and
    returns an array with all the integer's divisors (except for 1 and
    the number itself) from smallest to largest. If the number is prime
    return the string "(integer) is prime".
    E.g.: divisors(12) -> [2, 3, 4, 6]
          divisors(25) -> [5]
          divisors(13) -> "13 is prime"
*/

function divisors(integer) {
    let divs = [];
    for(let i = 2; i < integer; i++) {
        if(integer % i === 0) {
            divs.push(i);
        }
    }
    return divs.length ? divs : integer + " is prime";
}

console.log(divisors(15));
console.log(divisors(13));
console.log(divisors(25));
