let allButtons = document.querySelectorAll('.grid-item');
let userInputs = document.getElementById('#userInput');
let showAnswer = document.getElementById('#showAnswer');
let equalsButton = document.getElementById('#equalsBtn');
let inputs = document.querySelectorAll('.number, .operand');
let storeUserInput = [];
let storeNumbers = [];
for (input of inputs) {
    input.addEventListener('click', function (e) {
            storeUserInput.push(input.value);
            userInput.textContent += e.target.value;
    });
}
function add() {

}
function subtract() {

}
function multiply() {

}
function divide() {
    
}