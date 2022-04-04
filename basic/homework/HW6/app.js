// First Problem
var firstnum = document.getElementById('firstnum');
var secondnum = document.getElementById('secondnum');
var operator = document.getElementById('operator');
var result = document.getElementById('result');

function calc() {
  var x = +firstnum.value;
  var y = +secondnum.value;

  switch (operator.value) {
    case 'plus':
      result.innerHTML = x + y;
      break;
    case 'minus':
      result.innerHTML = x - y;
      break;
    case 'multiply':
      result.innerHTML = x * y;
      break;
    default:
      result.innerHTML = x / y;
  }
}

// Second Problem
var firstmultinum = document.getElementById('firstmultinum');
var secondmultinum = document.getElementById('secondmultinum');
var multiresult = document.getElementById('multiresult');

function show() {
  var x = +firstmultinum.value;
  var y = +secondmultinum.value;

  var i = 1;
  var answer = '';
  while (i <= y) {
    answer += `${x} x ${i} = ${x * i} <br/><br/>`;
    i++;
    multiresult.innerHTML = answer;
  }
}
