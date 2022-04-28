"use strict";

/*
    Rock Paper Scissors
    You have to return which player won. In cas of a draw return "Draw!".
    Scissors beats paper. Paper beats rock. Rock beats scissors.
    E.g.: rps("scissors", "paper") -> "Player 1 won!"
*/

const rps = (p1, p2) => {
    if(p1 === "scissors" && p2 === "paper") return "Player 1 won!";
    else if(p1 === "paper" && p2 === "scissors") return "Player 2 won!";
    else if(p1 === "paper" && p2 === "rock") return "Player 1 won!";
    else if(p1 === "rock" && p2 === "paper") return "Player 2 won!";
    else if(p1 === "rock" && p2 === "scissors") return "Player 1 won!";
    else if(p1 === "scissors" && p2 === "rock") return "Player 2 won!";
    else if(p1 === p2) return "Draw!";
}

console.log(rps("rock", "scissors"));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'scissors'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));


// Different solution 1

const rps1 = (p1, p2) => {
    if(p1 === p2) return "Draw!";
    let rules = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };
    if(p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
}

console.log(rps1("scissors", "rock"));


// Different solution 2

const rps2 =(p1, p2) => {
    if(p1 === p2) return "Draw";
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2) ? 1 : 2} won!`;
}

console.log(rps2("rock", "scissors"));
console.log(rps2("rock", "paper"));