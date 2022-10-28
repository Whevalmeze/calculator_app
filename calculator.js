// result is globally scoped
let result = '';
// addition function
const add = function (a, b) {
  return a + b;
};
// subtraction function
const subtract = function(array) {
  array.forEach((item, index)=> {
    array.splice(index, 1, parseInt(item));
  });
  let answer = 0;
	for (const item of array) {
  if(typeof item == 'number') {answer -= item}
  else answer = "Wrong Input";
  };
  return answer;
};

// sum function
const sum = function(array) {
  array.forEach((item, index)=> {
    array.splice(index, 1, parseInt(item));
  });
  let answer = 0;
	for (const item of array) {
  if(typeof item == 'number') {answer += item}
  else answer = "Wrong Input";
  };
  return answer;
};

// multiplication function
const multiply = function(array) {
  array.forEach((item, index)=> {
    array.splice(index, 1, parseInt(item));
  });
  let answer = 1;
	for (const item of array) {
  if(typeof item == 'number') {answer *= item}
  else answer = "Wrong Input";
  };
  return answer
};

// division function
const divide = function(array) {
  array.forEach((item, index)=> {
    array.splice(index, 1, parseInt(item));
  });
  let answer = array[0];
	for (const item of array) {
  if(typeof item == 'number') {answer /= item}
  else answer = "Wrong Input";
  };
  return answer
};

// other functions
/*const power = function(number, power) {
  let answer = 1;
  for (let i = power; i > 0; i--) {
    answer *= number;
  };
  return answer;
};

const factorial = function(number) {
  let array = [];
  for (let i = number; i > 0; i--) {
    array.push(i); 
  };
  let answer = 1;
  for (const item of array) {
    answer *= item;
  };
  return answer;
};*/

// all operations are to be performed on the array 
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
    //   if (currentOperation.innerText === "+") {
    //     result = sum(array);
    //   } else if (currentOperation.innerText === "-") {
    //     result = subtract(array);  
    //   } else if (currentOperation.innerText === "÷") {
    //     result = divide(array);  
    //   } else if (currentOperation.innerText === "×") {
    //     result = multiply(array);  
    //   } 
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

