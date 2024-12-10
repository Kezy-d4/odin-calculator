let operandInput1 = '';
let operandInput2 = '';
let operatorInput = '';
let operandCommitted = false;

const output = document.querySelector('.output');
const sign = document.querySelector('.sign');
const backspace = document.querySelector('.backspace');
const clear = document.querySelector('.clear');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');

output.textContent = '0';

operands.forEach(operand => {
  operand.addEventListener('click', (e) => selectOperand(e));
});

sign.addEventListener('click', () => changeSign());

backspace.addEventListener('click', () => undo());

clear.addEventListener('click', () => allClear());

operators.forEach(operator => {
  operator.addEventListener('click', (e) => {

    operatorInput = e.target.textContent;
    console.log('operatorInput:', operatorInput);
    let displayContents = output.textContent;
    let result;

    if (parseFloat(displayContents) === 0 || parseFloat(displayContents) === -0) {
      displayContents = 0;
    } else {
      displayContents = parseFloat(displayContents);
    }

    if (operandInput1 === '') {
      operandInput1 = displayContents;
      operandCommitted = true;
      console.log('operandCommitted:', operandCommitted);
      console.log('operandInput1:', operandInput1);

      if (operatorInput === '=') {
        result = operandInput1;

        if (containsDecimals(result)) { 
          result = result.toFixed(1);
        } 

        output.textContent = result;
        console.log('final display:', output.textContent);
      }
    }

    if (operandInput1) {
      if (operandInput2 === '') {
        if (operatorInput === '=') {
          result = operandInput1;

          if (containsDecimals(result)) { 
            result = result.toFixed(1);
          } 

          output.textContent = result;

        } else if (operatorInput !== '=') {

        }
      }
    }



  });
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
