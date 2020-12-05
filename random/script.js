
// Start line


// Result line
let res = document.getElementById("result-output").innerHTML;

// Button TAP!
const btnStart = document.getElementById("btn-btn");

btnStart.onclick = function() {
    let min = document.getElementById("initialValue").value;
let max = document.getElementById("endValue").value;
let size = document.getElementById("numberOfValues").value;
console.log(min)
    let val = getRandomNumber(min, max, size);
    console.log(min)
    document.getElementById('result-output').innerHTML = val;
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