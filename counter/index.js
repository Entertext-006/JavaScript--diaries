document.getElementById("counterDisplay").innerHTML = 0;
let count = 0;

function incrementCounter() {
    count += 1;
    document.getElementById("counterDisplay").innerHTML = count;
}   
function decrementCounter() {
    count -= 1;
    document.getElementById("counterDisplay").innerHTML = count;
}   
function resetCounter() {
    count = 0;
    document.getElementById("counterDisplay").innerHTML = count;
}   