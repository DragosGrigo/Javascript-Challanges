"use strict";
/* Given a month as an integer from 1 to 12,
return to which quarter of the year it belongs as a string.
*/ 
function quarterOf(month) {
    while(month >= 1 && month <= 12) {
        if(month >= 1 && month <= 3) {
            return "First quarter";
        }
        else if(month >= 4 && month <= 6) {
            return "Second quarter";
        }
        else if(month >= 7 && month <= 9) {
            return "Third quarter";
        }
        else if(month >= 10 && month <= 12) {
            return "Fourth quarter";
        }
        
    }
}

console.log(quarterOf(2));
console.log(quarterOf(4));
console.log(quarterOf(7));
console.log(quarterOf(12));

/* Given a month as an integer from 1 to 12,
return to which quarter of the year it belongs as an integer.
*/ 

const quarterOfInteger = month => Math.ceil(month / 3);
console.log(quarterOfInteger(2));

