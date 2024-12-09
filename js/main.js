let operandInput1 = '';
let operandInput2 = '';
let operatorInput = '';

const output = document.querySelector('.output');
const sign = document.querySelector('.sign');
const backspace = document.querySelector('.backspace');
const clear = document.querySelector('.clear');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll(
  '.add-and-subtract > button, .multiply-and-divide > button'
);
const equals = document.querySelector('.equals > button');

output.textContent = '0';

operands.forEach(operand => {
  operand.addEventListener('click', (e) => selectOperand(e));
});

sign.addEventListener('click', () => changeSign());

backspace.addEventListener('click', () => undo());

clear.addEventListener('click', () => allClear());
















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
