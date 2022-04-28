"use strict";

/*
    Write a function that receives two strings as parameter.
    These strings are in the following format of date: YYYY/MM/DD.
    Take the years and calculate the difference between them.
    E.g.: howManyYear('1997/10/10', '2015/10/10') -> 18
*/

const howManyYears = (date1, date2) => {
    const year = s => +s.split('/')[0];
    return Math.abs(year(date1) - year(date2));
}

console.log(howManyYears('1997/10/10', '2015/10/10'));
console.log(howManyYears('2015/10/10', '1997/10/10'));