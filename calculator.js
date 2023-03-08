//let allButtons = document.querySelectorAll('.grid-item');
//let storeNumbers = [];
//2 + 3 * 4 / 5 -6 + 7
let userInputs = document.getElementById('#userInput');
let showAnswer = document.getElementById('#showAnswer');
let equalsButton = document.getElementById('#equalsBtn');
let inputs = document.querySelectorAll('.number, .operand');
let storeUserInput = [];
let chosenNum;
for (input of inputs) {
    input.addEventListener('click', function (e) {
        storeUserInput.push(userInput.textContent += e.target.value);
        console.log(e.target.value + ' is num1');
        //showAnswer.textContent = e.target.value;;
    });
}
//equalsButton.addEventListener('click', operate);
function add() {

}
function subtract() {

}
function multiply() {

}
function divide() {

}
function operate(operator, num1, num2) {
    //return parseInt(num1) + operator + parseInt(num2);
    alert('hi');
}
let nestedArray = [['deep'],[['deeper'], ['deep'] ],[[['deeper'], ['deepest']],[[['deepest']]]]];