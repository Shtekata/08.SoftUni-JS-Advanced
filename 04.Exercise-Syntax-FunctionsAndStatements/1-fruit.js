"use strict";

let fruit = 'orange';
let weight = 2500;
let price = 1.80;

function solve(fruit, weight, price){
    const kg = weight / 1000;
    const money = kg * price;

    const result = `I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`
    return result;
}

console.log(solve(fruit, weight, price)); 