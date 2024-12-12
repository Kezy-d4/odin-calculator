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
const operators = document.querySelectorAll(
  '.add-and-subtract > button, .multiply-and-divide > button'
);
const equals = document.querySelector('.equals > button');

output.textContent = '0';

operands.forEach(operand => {
  operand.addEventListener('click', (e) => {

    if (operatorInput === '') {
      populateDisplay(e);
    } else if (operatorInput !== '') {
      assignOperator();
      resetInputsAndDisplay();
      populateDisplay(e);
    }
    console.log(expression);
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
      }

      result = operate(expression.operand1, expression.operand2, expression.operator);

      expression.operand1 = result;
      expression.operand2 = '';
      
      if (containsAnyDecimals(result)) {
        result = parseFloat(result.toFixed(1));
      } 

      if (result.toString().length > 10) {
        alert('That result contains too many digits! The calculator will be reset.');
        allClear();
      } else {
        output.textContent = result;
      }
    }
    storeOperatorInput(e);
  });
});

clear.addEventListener('click', () => allClear());


























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
