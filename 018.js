"use strict";

/*
    Create a function which calculates the final grade of a student depending on two
    parameters: a grade for the exam and a number of completed projects.
    This function should take two arguments: exam (grade from 0 to 100) and
    projects (number of completed projects from 0 to above).
    This function should return a number (final grade). There are four types of final grades:
    100 - if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90 - if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75 - if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0 - in other cases.
*/

function finalGrade(exam, projects) {
    if(exam > 90 || projects > 10) {
        return 100;
    }
    else if(exam > 75 && projects >= 5) {
        return 90;
    }
    else if(exam > 50 && projects >= 2) {
        return 75;
    }
    else {
        return 0;
    }
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
console.log(finalGrade(55, 3));
console.log(finalGrade(55, 0));
console.log(finalGrade(20, 2));


// Different syntax

const finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 : exam > 75 && projects >=5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;

