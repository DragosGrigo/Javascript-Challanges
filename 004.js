"use strict";

/* One house is made up of 6 matchsticks.
Two houses that are united share the same matchstick in the middle.
and so on...
Create a function that takes a number(step) which represents the house count, 
and returns the number of matchsticks from that count.
Step(0) returns 0 matchsticks.
*/

const matchHouse = step => {
    if(step !== 0) {
        return step * 5 + 1;
    }
    else { 
        return 0;
    }
}

console.log(matchHouse(1));
console.log(matchHouse(2));
console.log(matchHouse(4));
console.log(matchHouse(87));
console.log(matchHouse(0));