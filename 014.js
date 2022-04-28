"use strict";

/*
    A pangram is a sentence that contains every single letter of the alphabet
    at least once. Given a string, detect whether or not it is a pangram. 
    Return true if it is, false if not. Ignore numbers and punctuation.
    E.g.: isPangram("The quick brown fox jumps over the lazy dog.") -> true
          isPangram(""This is not a pangram."") -> false
*/

function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x) {
        return string.indexOf(x) !== -1;
    });
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));

