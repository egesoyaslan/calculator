function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

let num1;
let operator;
let num2;

function operate(a, b, c) {
    if (b === `+`) return add(a, c);
    if (b === `-`) return subtract(a, c);
    if (b === `x`) return multiply(a,c);
    if (b === `÷`) return divide(a, c);
}

function assign(givenArray) {
    num1 = givenArray[0];
    operator = givenArray[1];
    num2 = givenArray[2];
}

let displayValue = ``;
const display = document.querySelector(`.display`);

const buttons = document.querySelector(`.buttons`);
buttons.addEventListener(`click`, (e) => {
    const target = (e.target).textContent;

    if (target === `=`) { 
        let array = [];
        array = displayValue.split(` `);

        assign(array);
        while (array.length > 1) {
            array[0] = operate(num1, operator, num2);
            array.splice(1, 2);
            assign(array);
        }
        displayValue = num1;
    }

    else if (target === `AC`) {
        displayValue = ``;
    }

    else displayValue += target;

    display.textContent = displayValue;
});