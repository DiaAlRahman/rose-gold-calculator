// This should make it easy to deal with the digital display of the calculator
function insert(str, index, value) {
    str = str.split('').reverse().join('');
    str = str.substr(0, index) + value + str.substr(index);
    str = str.split('').reverse().join('');
    return str;
}
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

const MAX_CHARS = 9
const calculator = document.querySelector('.calculator');

// These ones are for the update display function.
let decIn = false;
let zero = false;

const ac = document.querySelector('#ac');
ac.addEventListener('click', turn_on);
function turn_on() {
    const calcScreen = document.querySelector('.screen');
    const curr = document.querySelector('.curr-result');

    calcScreen.style.backgroundColor = '#B4D8B2';

    curr.textContent = '0.';
    zero = false;

    if (calculator.id === 'OFF') {
        calculator.addEventListener('keydown', (e) => {
            lightOn(e);
        });
        function lightOn(event){
            switch (event.key) {
                case '1':
                    document.getElementById('one').className = 'onHover';
                    break;
                case '2':
                    document.getElementById('two').className = 'onHover';
                    break;
                case '3':
                    document.getElementById('three').className = 'onHover';
                    break;
                case '4':
                    document.getElementById('four').className = 'onHover';
                    break;
                case '5':
                    document.getElementById('five').className = 'onHover';
                    break;
                case '6':
                    document.getElementById('six').className = 'onHover';
                    break;
                case '7':
                    document.getElementById('seven').className = 'onHover';
                    break;
                case '8':
                    document.getElementById('eight').className = 'onHover';
                    break;
                case '9':
                    document.getElementById('nine').className = 'onHover';
                    break;
                case '0':
                    document.getElementById('zero').className = 'onHover';
                    break;
                case '+':
                    document.getElementById('add').className = 'onHover';
                    break;
                case '-':
                    document.getElementById('subtract').className = 'onHover';
                    break;
                case '*':
                    document.getElementById('multiply').className = 'onHover';
                    break;
                case '/':
                    document.getElementById('divide').className = 'onHover';
                    break;
                case '=':
                    document.getElementById('equal').className = 'onHover';
                    break;
                case 'Enter':
                    document.getElementById('equal').className = 'onHover';
                    break;
                case '.':
                    document.getElementById('decimal').className = 'onHover';
                    break;
                case 'Backspace':
                    document.getElementById('ce').className = 'onHover';
            }
        };
        calculator.addEventListener('keyup', lightOff);
        function lightOff(event){
            switch (event.key) {
                case '1':
                    document.getElementById('one').classList.remove('onHover');
                    break;
                case '2':
                    document.getElementById('two').classList.remove('onHover');
                    break;
                case '3':
                    document.getElementById('three').classList.remove('onHover');
                    break;
                case '4':
                    document.getElementById('four').classList.remove('onHover');
                    break;
                case '5':
                    document.getElementById('five').classList.remove('onHover');
                    break;
                case '6':
                    document.getElementById('six').classList.remove('onHover');
                    break;
                case '7':
                    document.getElementById('seven').classList.remove('onHover');
                    break;
                case '8':
                    document.getElementById('eight').classList.remove('onHover');
                    break;
                case '9':
                    document.getElementById('nine').classList.remove('onHover');
                    break;
                case '0':
                    document.getElementById('zero').classList.remove('onHover');
                    break;
                case '+':
                    document.getElementById('add').classList.remove('onHover');
                    break;
                case '-':
                    document.getElementById('subtract').classList.remove('onHover');
                    break;
                case '*':
                    document.getElementById('multiply').classList.remove('onHover');
                    break;
                case '/':
                    document.getElementById('divide').classList.remove('onHover');
                    break;
                case '=':
                case 'Enter':
                    document.getElementById('equal').classList.remove('onHover');
                    break;
                case '.':
                    document.getElementById('decimal').classList.remove('onHover');
                    break;
                case 'Backspace':
                    document.getElementById('ce').classList.remove('onHover');
                    break;
                // Add other cases as needed
            }
        };
        calculator.id = 'ON';
    }
}
// The delete key acts as AC, and it is seperate because this will have 
// the window event listener, where the other buttons will have the calculator event 
// listener. AC will turn on the calc, and hence 'activate' the other buttons.
addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        document.querySelector('.curr-result').style.color= '#B4D8B2';
        ac.className = 'onHover';
        ac.click();
        calculator.focus();
    }

});
addEventListener('keyup', (event) => {
    if (event.key === 'Delete') {
        document.querySelector('.curr-result').style.color= '';
        event.preventDefault();
        ac.classList.remove('onHover');
    }
});


calculator.addEventListener('keypress', (event) => {
    if (calculator.id === 'ON') {
        updateDisplay(event);
        console.log(event);
    }
});

function updateDisplay(event) {
    const curr = document.querySelector('.curr-result');
    const prev = document.querySelector('.prev-result');

    if (curr.textContent.length < MAX_CHARS) {
        if (Number(event.key) || event.key === '0') {
            curr.textContent = insert(curr.textContent, 1, event.key);
            if (!zero) {
                console.log(zero);
                curr.textContent = curr.textContent.replace('0', '');
                zero = true;
            }
        }
        if ((event.key === '.')) {
            decIn = true;
        };
    };
};




