document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('Display');
    const buttons = Array.from(document.querySelectorAll('button'));
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerText;

            switch(value) {
                case 'AC':
                    currentInput = '';
                    operator = '';
                    previousInput = '';
                    display.value = '';
                    break;
                case '=':
                    if (currentInput && previousInput && operator) {
                        currentInput = calculate(previousInput, currentInput, operator);
                        display.value = currentInput;
                        previousInput = '';
                        operator = '';
                    }
                    break;
                case '+':
                case '-':
                case 'x':
                case '/':
                    if (currentInput && operator) {
                        previousInput = calculate(previousInput, currentInput, operator);
                        display.value = previousInput;
                        currentInput = '';
                    } else {
                        previousInput = currentInput;
                        currentInput = '';
                    }
                    operator = value;
                    break;
                default:
                    if (!isNaN(value) || value === '.') {
                        currentInput += value;
                        display.value = currentInput;
                    }
                    break;
            }
        });
    });

    function calculate(num1, num2, operator) {
        let result = 0;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        return result.toString();
    }
});
