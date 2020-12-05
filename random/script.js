
// Start line
let min = document.getElementById("result-output").value;
let max = document.getElementById("endValue").value;
let size = document.getElementById("numberOfValues").value;

console.log(min)

// Result line
let res = document.getElementById("result-output").innerHTML;

// Button TAP!
const btnStart = document.getElementById("btn-btn");

btnStart.onclick = function() {
    let val = getRandomNumber(max, min, size);
    console.log(min)
    document.getElementById('result-output').innerHTML = " результат рандома" + val;
};

function getRandomNumber(min, max, size) {
    let numbers = [];
    let check = [];
    for(; numbers.length < size;) {
        while (check.length < size) {
            numbers.push(Math.floor(Math.random() * ( max - min + 1) + min));
            check = Array.from(new Set(numbers))
        }
    }
   return String(check)
  }