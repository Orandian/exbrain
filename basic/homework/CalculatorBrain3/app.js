var startbtn = document.getElementById('startbtn'),
  stopbtn = document.getElementById('stopbtn');

var question = document.getElementById('question');

var buttons = document.getElementsByClassName('ranbtn');

var score = document.getElementById('score');

var time = document.getElementById('time');

var scoreresult = document.getElementById('scoreresult');

var answer = '';
var x = 0;
var y = 0;
var operator = '';

function start() {
  startbtn.setAttribute('class', 'start inactive');
  startbtn.disabled = true;
  stopbtn.setAttribute('class', 'stop active');
  stopbtn.disabled = false;
  questionfun();
  randomanswer();
  buttons[0].disabled = false;
  buttons[1].disabled = false;
  buttons[2].disabled = false;
}

function stop() {
  startbtn.setAttribute('class', 'start active');
  startbtn.disabled = false;
  stopbtn.setAttribute('class', 'stop inactive');
  stopbtn.disabled = true;
  question.innerHTML = '';
  buttons[0].innerHTML = '';
  buttons[1].innerHTML = '';
  buttons[2].innerHTML = '';
  buttons[0].disabled = true;
  buttons[1].disabled = true;
  buttons[2].disabled = true;
  score.innerHTML = 0;
  y = 0;
  time.innerHTML = 0;
  scoreresult.innerHTML += `<li>Your score is ${x}</li>`;
  x = 0;
}

function questionfun() {
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
}

function randomanswer() {
  var ran1 = Math.floor(Math.random() * 10000);
  var ran2 = Math.floor(Math.random() * 10000);
  var random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      buttons[0].innerHTML = answer;
      buttons[1].innerHTML = ran1;
      buttons[2].innerHTML = ran2;
      break;
    case 1:
      buttons[1].innerHTML = answer;
      buttons[0].innerHTML = ran1;
      buttons[2].innerHTML = ran2;
      break;
    case 2:
      buttons[2].innerHTML = answer;
      buttons[0].innerHTML = ran1;
      buttons[1].innerHTML = ran2;
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
  questionfun();
  randomanswer();
  y += 1;
  time.innerHTML = y;
}
