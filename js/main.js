let operatorInput = '';
let operandInput = '';
let result = 0;

let expression = {
  operand1: '',
  operand2: '',
  operator: '',
};

const output = document.querySelector('.output');
const backspace = document.querySelector('.backspace');
const clear = document.querySelector('.clear');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const equals = document.querySelector('.equals > button');

multiplication.alternativeKey = '*';
division.alternativeKey = '/';
equals.alternativeKey = 'Enter';

output.textContent = '0';

operands.forEach(operand => {
  operand.addEventListener('click', (e) => {

    if (operatorInput === '=') {
      allClear();
    }

    if (operatorInput === '') {
      populateDisplay(e);
    } else if (operatorInput !== '') {
      assignOperator();
      resetInputsAndDisplay();
      populateDisplay(e);
    }
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', (e) => {

    if (operatorInput === '') {
      storeOperandInput();
      assignOperand();
    }

    if (operatorInput === '' && expression.operand1 !== '' && expression.operand2 !== '' &&
    expression.operator !== '') {

      if ((expression.operand1 === 0 || expression.operand2 === 0) && expression.operator === '÷') {
        alert('You can\'t divide by zero! The calculator will be reset.');
        allClear();
        return;
      }

      result = operate(expression.operand1, expression.operand2, expression.operator);
      
      if (containsAnyDecimals(result)) {
        result = parseFloat(result.toFixed(1));
      } 

      if (result === -0) {
        result = 0;
      }
      console.log('result:', result);
      console.log('resultLength:', result.toString().length);

      expression.operand1 = result;
      expression.operand2 = '';

      if (result.toString().length > 10) {
        alert('That result contains too many characters to display! The calculator will be reset.');
        allClear();
        return;
      } else {
        output.textContent = result;
      }
    }

    storeOperatorInput(e);      
  });
});

clear.addEventListener('click', () => allClear());

backspace.addEventListener('click', () => {
  if (operatorInput !== '') {
    return;
  }
  
  undo();
});

document.addEventListener('click', () => console.log(expression));
document.addEventListener('keydown', () => console.log(expression));

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'c' || e.key === 'C') allClear();

  if (e.key === 'Backspace') {
    let clickEvent = new Event('click');
    backspace.dispatchEvent(clickEvent);
  }

  operands.forEach(operand => {
    if (e.key === operand.textContent) {
      let clickEvent = new Event('click');
      operand.dispatchEvent(clickEvent);
    }  
  });

  operators.forEach(operator => {
    if (e.key === operator.textContent || e.key === operator.alternativeKey) {
      let clickEvent = new Event('click');
      operator.dispatchEvent(clickEvent);      
    }
  });
});

























// sign.addEventListener('click', () => changeSign());

// backspace.addEventListener('click', () => undo());

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
