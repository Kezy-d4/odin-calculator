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
  if (output.textContent === '0' && e.target.textContent !== '.') {
    output.textContent = e.target.textContent;

  } else {
    output.textContent += e.target.textContent;
  }
}

function selectOperand(e) {
  if (output.textContent.includes('.') && e.target.textContent === '.') {
    return;

  } else if (output.textContent.length >= 12) {
    if (output.textContent.includes('-') && output.textContent.length < 13) {
      populateDisplay(e);
    } else {
      return;
    }

  } else {
    populateDisplay(e);
  }
}

function allClear() {
  output.textContent = '0';
  operandInput1 = '';
  operandInput2 = '';
  operatorInput = '';
}

function undo() {
  output.textContent = output.textContent.slice(0, -1);

  if (output.textContent === '' || output.textContent === '-' ||
  output.textContent === '-0' || output.textContent === '-0.') {

    output.textContent = '0';
  }
}

function changeSign() {
  if (!output.textContent.includes('-') && 
  output.textContent !== '0' && output.textContent !== '0.') {

    output.textContent = '-' + output.textContent;

  } else if (output.textContent.includes('-')) {
    output.textContent = output.textContent.slice(1);
  }
}
