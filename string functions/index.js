let username= window.prompt("Enter your username:");

let user=username.trim();
let letter=user.charAt(0).toUpperCase();
let rest=user.slice(1).toLowerCase();
let finalName= letter + rest;

console.log("Formatted Username: " + finalName);

let fruits=['apple', 'banana', 'orange', 'apple', 'mango', 'banana'];

fruits.forEach(capitalizeFruits);
fruits.forEach(displayFruits);

function upperCase(element, index, array) {
    array[index]=element.toUpperCase();
}

function lowerCase(element, index ,array){
    array[index]=element.toLowerCase();
}

function capitalizeFruits(element, index, array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}

function displayFruits(){
    console.log(fruits);
}