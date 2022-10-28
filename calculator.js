


let array = [];
let input1 = '';
let output = document.createElement('h2');
let outputWrapper = document.querySelector('div.inner-container>div.output-wrapper');
output.classList.add('output');
outputWrapper.appendChild(output);
output.innerText= "";

let number = document.querySelectorAll('div.col > div.btn >button.number');
number.forEach((currentBtn, index) => {
  currentBtn.addEventListener('click', () => {
    input1 += currentBtn.innerText;
    output.innerText = input1;
  });
});
let clear = document.querySelector('div.col > div.btn.clear > button.align-center');
function clearOutput(params) {
  array = []; input1 = ''; output.innerText = input1;
}
clear.addEventListener('click', clearOutput);



const add = function (a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let answer = 0;
	for (const item of array) {
    answer += item;
  };
  return answer;
};

const multiply = function(array) {
  let answer = 1;
	for (const item of array) {
    answer *= item;
  };
  return answer
};

const power = function(number, power) {
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
};


