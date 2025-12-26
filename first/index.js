document.getElementById("greetButton").addEventListener("click", GreetUser);

function GreetUser() {
    const name = document.getElementById("nameInput").value;
    alert("Hello, " + name + "! Welcome to the Home Page.");
}

document.getElementById("checkAge").addEventListener("click", Checkage);
function Checkage() {
    const age = parseInt(document.getElementById("ageInput").value);
    if (age>=18? alert("You are eligible to vote."):alert("You are not eligible to vote."));}