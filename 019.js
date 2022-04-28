"use strict";

/*
    Check the provided array - (x) for good ideas 'good' and bad ideas 'bad'.
    If there are one or two good ideas, return 'Publish!', 
    if there are more than 2 return 'I smell a series!'.
    If there are no good ideas, as is often the case, return 'Fail!'.
    E.g.: well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) -> "I smell a series!"
          well(['good', 'bad', 'bad', 'bad', 'bad']) -> "Publish!"
*/

function well(x) {
    for(let i = 0; i < x.length; i++) {
        let count = x.filter(value => value === "good").length;
        if(count >=1 && count <= 2) {
            return "Publish!";
        }
        else if(count > 2) {
            return "I smell a series!";
        }
        else {
            return "Fail!";
        }
    }
}

console.log(well([['bad', 'bad', 'bad']]));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));