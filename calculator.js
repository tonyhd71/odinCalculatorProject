let allButtons = document.querySelectorAll('.grid-item');
let userInput = document.getElementById('#userInput');
let showAnswer = document.getElementById('#showAnswer');
let equalsButton = document.getElementById('#equalsBtn');

let storeUserInput = [];
let storeNumbers = [];
for (let i =0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function (e) {
        if (allButtons[i].classList.contains('number') || allButtons[i].classList.contains('operand')) {
            //storeNumbers.push(parseInt(allButtons[i].value));
            //console.log(storeNumbers);
            //userInput.appendChild(allButtons[i].value);
            storeUserInput.push(allButtons[i].value);
        }
    });
}
console.log(storeUserInput);

function appendUserInput() {

}