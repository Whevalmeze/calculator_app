


let array = [];
let output = document.createElement('h2');
let outputWrapper = document.querySelector('div.inner-container>div.output-wrapper');
output.classList.add('output');
outputWrapper.appendChild(output);
output.innerText= "";

let btn = document.querySelectorAll('div.row > div.btn');
btn.forEach((currentBtn) => {
  currentBtn.addEventListener('click', () => {
    output.innerText = currentBtn.innerText;
    array.push(currentBtn.innerText);
    console.log(array);
  })
});
array.forEach((item, index)=> {
  if (item.match(/[0-9]/g)) { array.splice(index, 1, parseInt(item)) };
});
console.log(array)



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


