"use strict";

/*
    John likes to go to the cinema. He can choose between system A and system B.
    System A : he buys a ticket (15 dollars) every time.
    System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
    then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
    E.g.: If John goes to the cinema 3 times:
    System A : 15 * 3 = 45
    System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849, no rounding for each ticket)
    John wants to know how many times he must go to the cinema so that the final result of System B, 
    when rounded up to the next dollar, will be cheaper than System A.
    The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket),
    perc (fraction of what he paid for the previous ticket) and returns the first n such that: ceil(price of System B) < price of System A
    E.g.: movie(500, 15, 0.9) -> 43
          movie(100, 10, 0.95) -> 24
*/

function movie(card, ticket, perc) {
    let systemA = 0;
    let systemB = card;
    let visits = 0;
    while(Math.ceil(systemB) >= Math.ceil(systemA)) {
        systemA += ticket;
        systemB += ticket * perc ** (visits + 1);
        visits++;
    }
    return visits;
}

console.log(movie(500, 15, 0.9));
console.log(movie(100, 10, 0.95));