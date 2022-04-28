"use strict";

/*
    A club has two categories of membership: "Senior" and "Open".
    Tell in what category the members will be placed.
    To be a senior, a member must be atleast 55 years old and have a handicap greater than 7.
    Handicaps range from -2 to +26. The better the player the lower the handicap.
    Input:
    - will consist of a list of pairs. Each pair contains information for a single member.
    - information consists of an integer for the age and an integer for the handicap.
    Output:
    - a list of string values "Open" or "Senior"
    E.g.: input = [(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)]
        output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data) {
    function getMembership(member) {
        return (member[0] >= 55 && member[1] > 7) ? "Senior" : "Open";
    }
    return data.map(getMembership);
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]));
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));



