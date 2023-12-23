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

function assign(string) {
    const array = string.split(` `);
    num1 = array[0];
    operator = array[1];
    num2 = array[2];
}

let displayValue = ``;

const buttons = document.querySelector(`.buttons`);
buttons.addEventListener(`click`, (e) => {
    const target = (e.target).textContent;

    if (target === `=`) {
        assign(displayValue);
        displayValue = operate(num1, operator, num2);
    }

    else if (target === `AC`) {
        displayValue = ``;
    }

    else displayValue += target;
});