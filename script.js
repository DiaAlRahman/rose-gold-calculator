// These functions are the core responsiblities of a calculator, they will take two numbers
// and return an answer according to that.
function add(prev, next) {
    return prev + next;
};
function subtract(prev, next) {
    return prev - next;
};
function multiply(prev, next) {
    return prev * next;
};
function divide(prev, next) {
    return prev / next;
};

// These are the variables that will be used to interact with the display later.
let n1, n2 = 0;
let operator = "";

function operate(prev, operator, next) {
    let result;
    switch (operator) {
        case "+":
            result = add(prev, next);
            console.log(result);
            break;
        case "-":
            result = subtract(prev, next);
            console.log(result);
            break;
        case "*":
            result = multiply(prev, next);
            console.log(result);
            break;
        case "/":
            result = divide(prev, next);
            console.log(result);
            break;
    };
};

const ac = document.querySelector('.ac');
ac.addEventListener('click', turn_on);
function turn_on() {
    const calcScreen = document.querySelector('.screen');
    calcScreen.style.backgroundColor = '#B4D8B2';
}

