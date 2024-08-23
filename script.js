const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting
});

calculateButton.addEventListener('click', () => {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const operator = operatorSelect.value;

    if (num1.toString().length > 2 || num2.toString().length > 2) {
        resultParagraph.textContent = 'Error: Only two-digit numbers are allowed.';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            resultParagraph.textContent = 'Error: Invalid operator.';
            return;
    }

    resultParagraph.textContent = `Result: ${result}`;
}); 