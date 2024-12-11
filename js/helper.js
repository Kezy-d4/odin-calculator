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

function populateDisplay(e) {
  if (output.textContent.length >= 10) {
    return;

  } else if (output.textContent.includes('.') && e.target.textContent === '.') {
    return;

  } else if (output.textContent === '0' && e.target.textContent !== '.') {
    output.textContent = e.target.textContent;

  } else {
    output.textContent += e.target.textContent;
  }
}

function storeOperatorInput(e) {
  operatorInput = e.target.textContent;
  console.log('operatorInput:', operatorInput);
}

function assignOperator() {
  expression.operator = operatorInput;
  console.log('operator:', expression.operator);
}

function appendOperator() {
  if (output.textContent.includes('+') || output.textContent.includes('-') ||
  output.textContent.includes('x') || output.textContent.includes('÷')) {

    output.textContent = output.textContent.slice(0, -1);
  }

  output.textContent += operatorInput;
}

function storeOperandInput() {
  operandInput = parseFloat(output.textContent);
  console.log('operandInput:', operandInput);
}

function assignOperand() {
  if (expression.operand1 === '') {
    expression.operand1 = operandInput;
    console.log('operand1:', expression.operand1);

  } else if (expression.operand1 !== '') {
    expression.operand2 = operandInput;
    console.log('operand2:', expression.operand2);
  }
}

function containsAnyDecimals(num) {
  if (num % 1 !== 0) {
    return true;
  } else {
    return false;
  }
}

function resetInputsAndDisplay() {
  output.textContent = '0';
  operatorInput = '';
  operandInput = '';
}

function allClear() {
  output.textContent = '0';
  operatorInput = '';
  operandInput = '';
  result = 0;
  expression.operand1 = '';
  expression.operand2 = '';
  expression.operator = '';
}
















// function undo() {
//   output.textContent = output.textContent.slice(0, -1);

//   if (output.textContent === '' || output.textContent === '-' ||
//   output.textContent === '-0' || output.textContent === '-0.') {

//     output.textContent = '0';
//   }
// }

// function changeSign() {
//   if (!output.textContent.includes('-') && 
//   output.textContent !== '0' && output.textContent !== '0.') {

//     output.textContent = '-' + output.textContent;

//   } else if (output.textContent.includes('-')) {
//     output.textContent = output.textContent.slice(1);
//   }
// }

// function selectOperand(e) {
//   if (output.textContent.includes('.') && e.target.textContent === '.') {
//     return;

//   } else if (output.textContent.length >= 18) {
//     if (output.textContent.includes('-') && output.textContent.length < 19) {
//       populateDisplay(e);
//     } else {
//       return;
//     }

//   } else {
//     populateDisplay(e);
//   }
// }

