"use strict";

/*
    Santa has 24 hours to distribute the presents.
    You will get an array as input with time durations as string in the
    following format: HH:MM:SS. Each duration represents the time taken
    by Santa to deliver a present. Determine whether he can do it in
    24 hours or not. In case the time required to deliver all of the 
    presents is exactly 24 hours, Santa can complete the delivery.
    E.g.: determineTime(["00:30:00", "02:30:00", "00:15:00"]) -> true
          determineTime(["06:00:00","12:00:00","06:30:00"]) -> false
*/

function determineTime(durations) {
    let sec = 0;
    let result = [];
    for(let i = 0; i < durations.length; i++) {
        result = durations[i].split(":");
        sec += +result[0] * 3600 + +result[1] * 60 + +result[2];
    }
    return sec / 3600 <= 24 ? true : false;
}

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]));
console.log(determineTime(["06:00:00","12:00:00","06:30:00"]));
console.log(determineTime([]));