"use strict";

/* Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function.
*/

const addUp = num => {
    let store = 0;
    for(let i = 1; i <= num; i++) {
        store += i;
    }
    return store;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

