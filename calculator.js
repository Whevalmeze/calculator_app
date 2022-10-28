// result is globally scoped
let result = '';

// calc function peforms all operations at one call
const calc = function (input, operation) {
  var result;
  // convert the items of the array to numbers
  input.forEach((item, index) => {
      input.splice(index, 1, parseInt(item));
  });
  //remove all NaN
  input.forEach((item, index) => {
      if (isNaN(item)) input.splice(index, 1);
  });
  // check for the operation 
  if (operation === "+") {
      // sum function
      const sum = function (array) {
          let answer = 0;
          for (const item of array) {
              if (typeof item == 'number') { answer += item };
          };

          return answer;
      };
      //call the function
      result = sum(input);
  } else if (operation === "−") {
      // subtraction function
      const subtract = function (array) {
          let answer = array[0];
        for (i = 1; i < array.length; i++) {
            answer -= array[i]
          };
          return answer;
      };
      //call the function
      result = subtract(input);
  } else if (operation === "÷") {
      // division function
      const divide = function (array) {
          let answer = array[0];
          for (i = 1; i < array.length; i++) {
              answer /= array[i]
          };
          return answer;
      };
      // call the function
      result = divide(input);
  } else if (operation === "×") {
      // multiplication function
      const multiply = function (array) {
          let answer = 1;
          for (const item of array) {
              if (typeof item == 'number') { answer *= item };
          };
          return answer;
      };
      //call this function
      result = multiply(input);
  };
  return result;
};


// all operations are performed on the array 
let array = [];
// input holds all numbers that would be pushed to the array
let input = '';
// control maintains control flow between outputs
let control = '';
let currentValue = '';
let nextValue = '';
// output displays the chosen number, operation and result
let output1 = document.createElement('h2');
let output2 = document.createElement('h2');
let symbol = document.querySelector('h2.symbol');
let innerContainer = document.querySelector('div.inner-container');
let outputWrapper = document.querySelector('div.inner-container>div.output-wrapper');
output1.classList.add('output');
output2.classList.add('output');;
outputWrapper.appendChild(output1);
outputWrapper.appendChild(output2);


// number listens for clicks, displays it to the output
let number = document.querySelectorAll('div.col > div.btn >button.number');
number.forEach((currentNumber) => {
  currentNumber.addEventListener('click', () => {
    let number = currentNumber.innerText;
    if (control !== 'next') {
      currentValue += number; 
      input = currentValue;
      output1.innerText = currentValue;
    } else if (control === 'next') {
      nextValue += number; 
      input = nextValue;
      output2.innerText = nextValue;
    };
  });
});


// clear empties the array, output and input, then displays the new input
let clear = document.querySelector('div.col > div.btn.clear > button.align-center');
function clearOutput() {
  array = []; currentValue = ''; input = ''; output1.innerText = input; output2.innerText = input; nextValue = '';
  symbol.style.visibility = 'hidden';
}
clear.addEventListener('click', clearOutput);


//  operation 
let operation = document.querySelectorAll('div.col > div.btn >button.operation');
operation.forEach((currentOperation) => {
  currentOperation.addEventListener('click', () => {
    // push the input to the array
    array.push(input);
    // this passes the input to the nextValue
    control = 'next';
    // display the symbol 
    symbol.style.visibility = 'visible';
    symbol.innerText = currentOperation.innerText;
    // check if the 
    if ((currentValue && input) !== '') {
      control = 'next'
      // if the input is not empty it calculates it
      result = calc(array, symbol.innerText);
      // assign the result to the currentValue
      currentValue = result;
      // display the result
      output1.innerText = result;
      // clears the nextValue
      nextValue = '';
      output2.innerText = nextValue;
    };
  });
});

let equals = document.querySelector('div.col > div.btn#equals-to >button.align-center');
equals.addEventListener('click', () => {
  // push the input to the array
  array.push(input);
  result = calc(array, symbol.innerText);
  // clears all other values
  array = []; input = ''; output2.innerText = input; symbol.style.visibility = 'hidden'; nextValue = ''; currentValue = '';
  // then it displays it
  if (result) { output1.innerText = result; };
  // pass the input to the currentValue variable
  control = '';
});

