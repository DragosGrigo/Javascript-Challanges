"use strict";

/*  Write a function that checks if a given string(case insensitive) is a palindrome.
    E.g.: isPalindrome("a") -> true
          isPalindrome("Abba") -> true
          isPalindrome("hello") -> false
*/

function isPalindrome(x) {
    let y = x.split("").reverse().join("");
    if(y.toLowerCase() === x.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome("a"));
console.log(isPalindrome("AbBa"));
console.log(isPalindrome("hello"));


