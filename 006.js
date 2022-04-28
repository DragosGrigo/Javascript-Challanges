"use strict";

/*  An ISOGRAM is a word that has no repeating letters.
    Implement a function that determines whether 
    a string that contains only letters is an Isogram.
    Assume an empty string is an isogram.
    Ignore letter case.
*/

const isIsogram = (str) => {
    return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram(""));

