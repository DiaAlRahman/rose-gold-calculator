// This should make it easy to deal with the digital display of the calculator
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
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

const ac = document.querySelector('#ac');
ac.addEventListener('click', turn_on);
function turn_on() {
    const calcScreen = document.querySelector('.screen');
    const curr = document.querySelector('.curr-result');
    const prev = document.querySelector('.prev-result');
    const decIn = false;

    calcScreen.style.backgroundColor = '#B4D8B2';

    curr.textContent = '0.';

    calculator.addEventListener('keydown', (event) => {
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
        if (curr.textContent.length < MAX_CHARS) {
            if (Number(event.key) || event.key === '0') {
                
            }
            if ((event.key === '.') && !(curr.textContent.includes('.'))) {
                console.log(curr.textContent);
                if (!curr.textContent)
                    curr.textContent = '0.';
                else
                    curr.textContent += event.key;
            }
        }
    }) 
    calculator.addEventListener('keyup', (event) => {
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
    })
}


// The delete key acts as AC, and it is seperate because this will have 
// the window event listener, where the other buttons will have the calculator event 
// listener. AC will turn on the calc, and hence 'activate' the other buttons.
const calculator = document.querySelector('.calculator');
addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        ac.className = 'onHover';
        ac.click();
        calculator.focus();
    }

})
addEventListener('keyup', (event) => {
    if (event.key === 'Delete') {
        event.preventDefault();
        ac.classList.remove('onHover');
    }
})



