"use strict";

// Access all the values from the nested arrays.

const myObj = {
    name: "John",
    age: 30,
    cars: [
        {
            name: "Ford",
            models: ["Fiesta", "Focus", "Mustang"]
        },
        {
            name: "Bmw",
            models: ["320", "x3", "x5"]
        },
        {
            name: "Fiat",
            models: ["500", "Panda"]
        }
    ]
}

console.log(myObj);

for(let i in myObj.cars) {
    let x = "";
    x += myObj.cars[i].name;
    console.log(x);
    for(let j in myObj.cars[i].models) {
        let y = "";
        y += myObj.cars[i].models[j];
        console.log(y);
    }
}




