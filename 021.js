"use strict";

/*
    You will be given an array and a limit value. You must check that all values in the
    array are below or equal to the limit value.
    If they are, return TRUE. Else, return FALSE.
    E.g.: smallEnough([66, 101], 200) -> true
          smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) -> false
*/

function smallEnough(a, limit) {
    return a.every(value => value <= limit);    
}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));


// Different solution

function smallEnough1(a, limit) {
    for(let i of a) {
        if(i > limit) return false;
    }
    return true;
}

console.log(smallEnough1([66, 101], 200));
console.log(smallEnough1([78, 117, 110, 99, 104, 117, 107, 115], 100));