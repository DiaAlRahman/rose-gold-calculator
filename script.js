// This should make it easy to deal with the digital display of the calculator
function insert(str, index, value) {
    str = str.split('').reverse().join('');
    str = str.substr(0, index) + value + str.substr(index);
    str = str.split('').reverse().join('');
    return str;
};

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
            break;
        case "-":
            result = subtract(prev, next);
            break;
        case "*":
            result = multiply(prev, next);
            break;
        case "/":
            if (next == 0) 
                return "That's offensive";
            else
                result = divide(prev, next);
            break;
    };
    return fixDp(result);
};

const MAX_CHARS = 8
const calculator = document.querySelector('.calculator');

// These ones are for the update display function.
let decIn = false;
let zero = false;
let clear = true;

//Will be used for the core calculation needs.
let n1, n2, result = 0;
let operator = '';

const ac = document.querySelector('#ac');
ac.addEventListener('click', turn_on);
function turn_on() {
    const calcScreen = document.querySelector('.screen');
    const curr = document.querySelector('.curr-result');
    const prev = document.querySelector('.prev-result');

    calcScreen.style.backgroundColor = '#B4D8B2';
    
    prev.textContent = '';
    curr.textContent = '0.';
    n1, n2, result = 0;
    operator = '';
    zero = false;
    decIn = false;

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
    const curr = document.querySelector('.curr-result')
    if (event.key === 'Delete') {
        curr.style.color = '#B4D8B2';
        document.querySelector('.prev-result').style.color = '#B4D8B2';
        ac.className = 'onHover';
        ac.click();
        calculator.focus();
    } else if (event.key === 'Backspace') {
        if ((curr.textContent.length === 2)) {
            curr.textContent = '0.';
        }
        else if (!decIn) {
            curr.textContent = curr.textContent.slice(0, curr.textContent.length - 2)
                + curr.textContent.slice(curr.textContent.length - 1);
        }
        else {
            curr.textContent = curr.textContent.slice(0, curr.textContent.length - 1);
        }
    }

});
addEventListener('keyup', (event) => {
    if (event.key === 'Delete') {
        document.querySelector('.curr-result').style.color = 'black';
        document.querySelector('.prev-result').style.color = 'black';
        event.preventDefault();
        ac.classList.remove('onHover');
    }
});


calculator.addEventListener('keypress', (event) => {
    calculate(event);
});

function calculate(event) {
    if (calculator.id === 'ON') {
        updateDisplay(event);
    }
}

function updateDisplay(event) {
    const curr = document.querySelector('.curr-result');
    const prev = document.querySelector('.prev-result');

    if (curr.textContent.length <= MAX_CHARS) {
        if (Number(event.key) || event.key === '0') {
            if (decIn) {
                curr.textContent += event.key;
            } else {
                curr.textContent = insert(curr.textContent, 1, event.key);
            }
            if (!zero) {
                curr.textContent = curr.textContent.replace('0', '');
                zero = true;
            }
        };

        if ((event.key === '.')) {
            decIn = true;
        };

        const ops = ['+', '-', '*', '/'];
        if (ops.includes(event.key)) {
            if (operator === '=') {
                prev.textContent = n1 + event.key;
                operator = event.key;
            } else if (prev.textContent) {
                n2 = Number(curr.textContent);
                result = operate(n1, operator, n2);
                operator = event.key;
                n1 = result;
            } else if (!prev.textContent) {
                n1 = Number(curr.textContent);
                operator = event.key; // This is here because the initial operator is required
            };

            if (result) {
                prev.textContent = result + event.key;
            } else if (decIn) {
                prev.textContent = curr.textContent + event.key;
            } else {
                prev.textContent = curr.textContent.slice(0, -1) + event.key;
            };

            curr.textContent = '0.';
            zero = false;
            decIn = false;
        } else if (event.key === '=' && (!(operator === '='))) {
            n2 = Number(curr.textContent);
            prev.textContent = n1 + operator + n2 + event.key;
            result = operate(n1, operator, n2);
            curr.textContent = result;

            if (!curr.textContent.includes('.'))
                curr.textContent += '.';

            n1 = Number(curr.textContent);
            operator = event.key;
        };  
    };
};

function fixDp(num) {
    let len = String(num).length;
    let lenInt = String(Math.round(num)).length + 1;

    if (len > 9) {
        return num.toFixed(9 - lenInt);
    };

    return num;
}



