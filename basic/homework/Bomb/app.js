var mine;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var over = false;

function mineBuild() {
  var r = Math.floor(Math.random() * 6 + 1);
  var c = Math.floor(Math.random() * 6 + 1);
  mine = r + '' + c;
  p1 = r - 1 + '' + (c - 1);
  p2 = r - 1 + '' + c;
  p3 = r - 1 + '' + (c + 1);
  p4 = r + '' + (c - 1);
  p5 = r + '' + (c + 1);
  p6 = r + 1 + '' + (c - 1);
  p7 = r + 1 + '' + c;
  p8 = r + 1 + '' + (c + 1);
}

function press(obj) {
  if (over == false) {
    var userPress = Number(obj.id);

    if (userPress == mine) {
      gameOverSound();
      gameOverDisplay();
      obj.style.backgroundColor = 'red';
      obj.innerHTML = 'BOOM';
    } else if (
      userPress == p1 ||
      userPress == p2 ||
      userPress == p3 ||
      userPress == p4 ||
      userPress == p5 ||
      userPress == p6 ||
      userPress == p7 ||
      userPress == p8
    ) {
      playClick();
      obj.style.backgroundColor = 'red';
      gameWin(obj);
    } else {
      playClick();
      obj.style.backgroundColor = 'cyan';
      gameWin(obj);
    }
  }
}

function gameOverDisplay() {
  over = true;
  for (let i = 0; i < 36; i++) {
    document.getElementsByClassName('cell')[i].style.backgroundColor = 'red';
    document.getElementsByClassName('cell')[i].style.color = 'white';
  }

  document.getElementById('32').innerHTML = 'G';
  document.getElementById('33').innerHTML = 'A';
  document.getElementById('34').innerHTML = 'M';
  document.getElementById('35').innerHTML = 'E';

  document.getElementById('42').innerHTML = 'O';
  document.getElementById('43').innerHTML = 'V';
  document.getElementById('44').innerHTML = 'E';
  document.getElementById('45').innerHTML = 'R';
}

function playClick() {
  var audio = document.getElementById('clickvoice');
  audio.play();
}

function gameOverSound() {
  var audio = document.getElementById('gameover');
  audio.play();
}

function gameWin(obj) {
  obj.setAttribute('class', 'cell finish');
  var finishcell = document.getElementsByClassName('finish');

  if (finishcell.length == 35) {
    gamewinSound();
    over = true;
    for (let i = 0; i < 36; i++) {
      document.getElementsByClassName('cell')[i].style.backgroundColor = 'cyan';
    }

    document.getElementById('32').innerHTML = 'Y';
    document.getElementById('33').innerHTML = 'O';
    document.getElementById('34').innerHTML = 'U';

    document.getElementById('42').innerHTML = 'W';
    document.getElementById('43').innerHTML = 'I';
    document.getElementById('44').innerHTML = 'N';
  }
}

function gamewinSound() {
  var audio = document.getElementById('gamewin');
  audio.play();
}
