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
      if (item === NaN) input.splice(index, 1);
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
              answer /= arr[i]
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
// output displays the chosen number, operation and result
let output = document.createElement('h2');
let outputWrapper = document.querySelector('div.inner-container>div.output-wrapper');
output.classList.add('output');
outputWrapper.appendChild(output);
output.innerText = '';

// checks 
clickCount = 0;

// number listens for clicks, displays it to the output
let number = document.querySelectorAll('div.col > div.btn >button.number');
number.forEach((currentNumber) => {
  currentNumber.addEventListener('click', () => {
    let number = currentNumber.innerText; 
    input += number;
    output.innerText += number;
  });
});
// clear empties the array, output and input, then displays the new input
let clear = document.querySelector('div.col > div.btn.clear > button.align-center');
function clearOutput() {
  array = []; input = ''; output.innerText = input;
}
clear.addEventListener('click', clearOutput);
//  when you click an operation it checks if the array is currently empty,
let operation = document.querySelectorAll('div.col > div.btn >button.operation');
operation.forEach((currentOperation) => {
  currentOperation.addEventListener('click', () => {
    array.push(input);
    input = '';
    clickCount++;
    //  if its not empty, it checks for the operation chosen, then displays it
    if (output.innerText.length !== 0 ) { output.innerText += currentOperation.innerText; clickCount = 0; };
    //  if the clickCount is 1, it means the button has already been clicked and operation is already displayed, it checks the current result and performs the chosen operation on the result
    // if (array.length >= 2) { 

    //  };
  });
});
//  

let equals = document.querySelector('div.col > div.btn#equals-to >button.align-center');
equals.addEventListener('click', () => {
  if (array.length >= 2) {
    if (currentOperation.innerText === "+") {
      result = sum(array);
    } else if (currentOperation.innerText === "-") {
      result = subtract(array);
    } else if (currentOperation.innerText === "÷") {
      result = divide(array);
    } else if (currentOperation.innerText === "×") {
      result = multiply(array);
    }
  }
}
);

