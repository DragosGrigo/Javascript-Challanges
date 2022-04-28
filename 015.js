"use strict";

/*
    You are trying to make 6 pieces of toast but you forgot to count the number
    of toast you put into the toaster.
    Define a function that counts how many more (or less) pieces of toast you
    need in the toaster. Even though you need more or less, the number will 
    still be positive, not negative.
    E.g.: sixToast(5) -> 1
          sixToast(12) -> 6 
*/

function sixToast(num) {
    let remainder = 0;
    if(num <= 6) {
        return remainder = 6 - num;
    }
    else if(num > 6) {
        return remainder = num - 6;
    }
}

console.log(sixToast(6));
console.log(sixToast(17));
console.log(sixToast(12));
console.log(sixToast(5));
console.log(sixToast(10));

