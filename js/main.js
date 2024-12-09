function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

let operandInput1 = '';
let operandInput2 = '';
let operatorInput = '';

function operate(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return add(operand1, operand2);

    case '-':
      return subtract(operand1, operand2);

    case 'x':
      return multiply(operand1, operand2);
    
    case '÷':
      return divide(operand1, operand2);
  }
}

const output = document.querySelector('.output');
const sign = document.querySelector('.sign');
const backspace = document.querySelector('.backspace');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll(
  '.add-and-subtract > button, .multiply-and-divide > button'
);
const equals = document.querySelector('.equals > button');

output.textContent = '0';

function populateDisplay(e) {
  if (output.textContent === '0' && e.target.textContent !== '.') {
    output.textContent = e.target.textContent;

  } else {
    output.textContent += e.target.textContent;
  }
}

operands.forEach(operand => {
  operand.addEventListener('click', (e) => {
    if (output.textContent.includes('.') && e.target.textContent === '.' ||
    output.textContent.length === 12) {

      return;

    } else {
      populateDisplay(e);
    }
  });
});

sign.addEventListener('click', () => {
  if (!output.textContent.includes('-') && 
  output.textContent !== '0' && output.textContent !== '0.') {

    output.textContent = '-' + output.textContent;

  } else if (output.textContent.includes('-')) {
    output.textContent = output.textContent.slice(1);
  }
});

backspace.addEventListener('click', () => {
  output.textContent = output.textContent.slice(0, -1);

  if (output.textContent === '' || output.textContent === '-' ||
  output.textContent === '-0' || output.textContent === '-0.') {
    
    output.textContent = '0';
  }
});
















/*
operands.forEach((operand) => {
  operand.addEventListener('click', (e) => {

    if (!operatorInput) {
      operandInput1 += e.target.textContent;
      console.log('operandInput1:', operandInput1);
      output.textContent = operandInput1;

    } else if (operatorInput) {
      operandInput2 += e.target.textContent;
      console.log('operandInput2:', operandInput2);
      output.textContent = operandInput2;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {

    operatorInput = e.target.textContent;
    console.log('operatorInput:', operatorInput);
  });
});

equals.addEventListener('click', () => {

  let result = operate(parseInt(operandInput1), parseInt(operandInput2), operatorInput);
  output.textContent = result;
});
*/
