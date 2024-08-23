let display = document.getElementById('display');
let operator = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(number) {
    display.value += number;
    if (!operator) {
        firstNumber += number;
    } else {
        secondNumber += number;
    }
}

function setOperator(op) {
    if (!operator && display.value !== '') {
        operator = op;
        display.value += ' ' + op + ' ';
    }
}

function calculate() {
    if (firstNumber && secondNumber && operator) {
        let result;
        let num1 = parseFloat(firstNumber);
        let num2 = parseFloat(secondNumber);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
        }

        display.value = result;
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
    }
}
