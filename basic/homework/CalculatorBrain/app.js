var btnstart = document.getElementById('btnstart'),
  btnstop = document.getElementById('btnstop'),
  submit = document.getElementById('submit');

var question = document.getElementById('question'),
  userinput = document.getElementById('userinput');

var result = document.getElementById('result');

var answer = '';

function start() {
  btnstart.setAttribute('class', 'inactive');
  btnstart.disabled = true;
  btnstop.setAttribute('class', 'btnstop');
  btnstop.disabled = false;
  submit.disabled = false;
  questionfun();
  userinput.disabled = false;
}

function stop() {
  btnstart.setAttribute('class', 'btnstart');
  btnstart.disabled = false;
  btnstop.setAttribute('class', 'inactive');
  btnstop.disabled = true;
  submit.disabled = true;
  userinput.disabled = true;
  question.innerHTML = '';
  userinput.value = '';
  result.innerHTML = '';
}

function questionfun() {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.floor(Math.random() * 100));
  answer = num1 + num2;

  question.innerHTML = num1 + ' + ' + num2;
}

function checkanswer() {
  if (userinput.value == '') {
    window.alert('Please type number in the inputbox');
  } else if (userinput.value == answer) {
    result.innerHTML += '<li>Correct</li>';
  } else {
    result.innerHTML += '<li>Wrong</li>';
  }

  questionfun();
  userinput.value = '';
}
