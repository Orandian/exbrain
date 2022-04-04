var startbtn = document.getElementById('startbtn');
var stopbtn = document.getElementById('stopbtn');
var mode = document.getElementById('mode');
var ranbtn = document.getElementsByClassName('ranbtn');
var score = document.getElementById('score');
var time = document.getElementById('time');
var scoreResult = document.getElementById('scoreResult');

var question = document.getElementById('question');
var answer = '';
var x = 0;
var y = 0;

function start() {
  startbtn.setAttribute('class', 'start inactive');
  startbtn.disabled = true;
  stopbtn.setAttribute('class', 'stop active');
  stopbtn.disabled = false;
  mode.disabled = true;
  questionFun();

  switch (mode.value) {
    case 'normal':
      ranbtn[2].disabled = false;
      ranbtn[3].disabled = false;
      break;
    case 'hyper':
      ranbtn[1].disabled = false;
      ranbtn[2].disabled = false;
      ranbtn[3].disabled = false;
      ranbtn[4].disabled = false;
      break;
    case 'genius':
      ranbtn[0].disabled = false;
      ranbtn[1].disabled = false;
      ranbtn[2].disabled = false;
      ranbtn[3].disabled = false;
      ranbtn[4].disabled = false;
      ranbtn[5].disabled = false;
      break;
  }
}

function stop() {
  startbtn.setAttribute('class', 'start active');
  startbtn.disabled = false;
  stopbtn.setAttribute('class', 'stop inactive');
  stopbtn.disabled = true;
  mode.disabled = false;
  question.innerHTML = '';
  scoreResult.innerHTML = `Your score is ${x}`;
  x = 0;
  y = 0;
  score.innerHTML = x;
  time.innerHTML = y;

  for (var i = 0; i < ranbtn.length; i++) {
    ranbtn[i].disabled = true;
    ranbtn[i].innerHTML = '';
  }
}

function questionFun() {
  switch (mode.value) {
    case 'normal':
      normalMode();
      ranbtn[0].disabled = true;
      ranbtn[1].disabled = true;
      ranbtn[4].disabled = true;
      ranbtn[5].disabled = true;
      break;
    case 'hyper':
      hyperMode();
      ranbtn[0].disabled = true;
      ranbtn[5].disabled = true;
      break;
    case 'genius':
      geniusMode();
      break;
  }
}

function normalMode() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  var operator = Math.floor(Math.random() * 4);
  switch (operator) {
    case 0:
      answer = num1 + num2;
      question.innerHTML = num1 + ' + ' + num2;
      break;
    case 1:
      answer = num1 - num2;
      question.innerHTML = num1 + ' - ' + num2;
      break;
    case 2:
      answer = num1 * num2;
      question.innerHTML = num1 + ' x ' + num2;
      break;
    case 3:
      answer = num1 / num2;
      question.innerHTML = num1 + ' / ' + num2;
      break;
  }
  normalModeChoice();
}

function hyperMode() {
  var num1 = Math.floor(Math.random() * 1000);
  var num2 = Math.floor(Math.random() * 1000);
  var operator = Math.floor(Math.random() * 4);
  switch (operator) {
    case 0:
      answer = num1 + num2;
      question.innerHTML = num1 + ' + ' + num2;
      break;
    case 1:
      answer = num1 - num2;
      question.innerHTML = num1 + ' - ' + num2;
      break;
    case 2:
      answer = num1 * num2;
      question.innerHTML = num1 + ' x ' + num2;
      break;
    case 3:
      answer = num1 / num2;
      question.innerHTML = num1 + ' / ' + num2;
      break;
  }
  hyperModeChoice();
}

function geniusMode() {
  var num1 = Math.floor(Math.random() * 10000);
  var num2 = Math.floor(Math.random() * 10000);
  var operator = Math.floor(Math.random() * 4);
  switch (operator) {
    case 0:
      answer = num1 + num2;
      question.innerHTML = num1 + ' + ' + num2;
      break;
    case 1:
      answer = num1 - num2;
      question.innerHTML = num1 + ' - ' + num2;
      break;
    case 2:
      answer = num1 * num2;
      question.innerHTML = num1 + ' x ' + num2;
      break;
    case 3:
      answer = num1 / num2;
      question.innerHTML = num1 + ' / ' + num2;
      break;
  }
  geniusModeChoice();
}

function normalModeChoice() {
  var ran1 = Math.floor(Math.random() * 100);
  var random = Math.floor(Math.random() * 2);

  switch (random) {
    case 0:
      ranbtn[2].innerHTML = answer;
      ranbtn[3].innerHTML = ran1;
      break;
    case 1:
      ranbtn[3].innerHTML = answer;
      ranbtn[2].innerHTML = ran1;
      break;
  }
}

function hyperModeChoice() {
  var ran1 = Math.floor(Math.random() * 1000);
  var ran2 = Math.floor(Math.random() * 1000);
  var ran3 = Math.floor(Math.random() * 1000);
  var random = Math.floor(Math.random() * 4);

  switch (random) {
    case 0:
      ranbtn[1].innerHTML = answer;
      ranbtn[2].innerHTML = ran1;
      ranbtn[3].innerHTML = ran2;
      ranbtn[4].innerHTML = ran3;
      break;
    case 1:
      ranbtn[1].innerHTML = ran1;
      ranbtn[2].innerHTML = answer;
      ranbtn[3].innerHTML = ran2;
      ranbtn[4].innerHTML = ran3;
      break;
    case 2:
      ranbtn[1].innerHTML = ran1;
      ranbtn[2].innerHTML = ran2;
      ranbtn[3].innerHTML = answer;
      ranbtn[4].innerHTML = ran3;
      break;
    case 3:
      ranbtn[1].innerHTML = ran1;
      ranbtn[2].innerHTML = ran2;
      ranbtn[3].innerHTML = ran3;
      ranbtn[4].innerHTML = answer;
      break;
  }
}

function geniusModeChoice() {
  var ran1 = Math.floor(Math.random() * 10000);
  var ran2 = Math.floor(Math.random() * 10000);
  var ran3 = Math.floor(Math.random() * 10000);
  var ran4 = Math.floor(Math.random() * 10000);
  var ran5 = Math.floor(Math.random() * 10000);
  var random = Math.floor(Math.random() * 6);

  switch (random) {
    case 0:
      ranbtn[0].innerHTML = answer;
      ranbtn[1].innerHTML = ran1;
      ranbtn[2].innerHTML = ran2;
      ranbtn[3].innerHTML = ran3;
      ranbtn[4].innerHTML = ran4;
      ranbtn[5].innerHTML = ran5;

      break;
    case 1:
      ranbtn[0].innerHTML = ran1;
      ranbtn[1].innerHTML = answer;
      ranbtn[2].innerHTML = ran2;
      ranbtn[3].innerHTML = ran3;
      ranbtn[4].innerHTML = ran4;
      ranbtn[5].innerHTML = ran5;
      break;
    case 2:
      ranbtn[0].innerHTML = ran1;
      ranbtn[1].innerHTML = ran2;
      ranbtn[2].innerHTML = answer;
      ranbtn[3].innerHTML = ran3;
      ranbtn[4].innerHTML = ran4;
      ranbtn[5].innerHTML = ran5;
      break;
    case 3:
      ranbtn[0].innerHTML = ran1;
      ranbtn[1].innerHTML = ran2;
      ranbtn[2].innerHTML = ran3;
      ranbtn[3].innerHTML = answer;
      ranbtn[4].innerHTML = ran4;
      ranbtn[5].innerHTML = ran5;
      break;
    case 4:
      ranbtn[0].innerHTML = ran1;
      ranbtn[1].innerHTML = ran2;
      ranbtn[2].innerHTML = ran3;
      ranbtn[3].innerHTML = ran4;
      ranbtn[4].innerHTML = answer;
      ranbtn[5].innerHTML = ran5;
      break;
    case 5:
      ranbtn[0].innerHTML = ran1;
      ranbtn[1].innerHTML = ran2;
      ranbtn[2].innerHTML = ran3;
      ranbtn[3].innerHTML = ran4;
      ranbtn[4].innerHTML = ran5;
      ranbtn[5].innerHTML = answer;
      break;
  }
}

function check(e) {
  if (e.innerHTML == answer) {
    x += 20;
  } else if (x == 0) {
    score.innerHTML = 0;
  } else {
    x -= 20;
  }
  score.innerHTML = x;
  questionFun();
  y += 1;
  time.innerHTML = y;
}
