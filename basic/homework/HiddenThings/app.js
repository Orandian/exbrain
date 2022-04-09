var mine1, mine2, mine3;
var x1, x2, x3, x4, x5, x6, x7, x8;
var y1, y2, y3, y4, y5, y6, y7, y8;
var z1, z2, z3, z4, z5, z6, z7, z8;

var treasure1;
var a1, a2, a3, a4, a5, a6, a7, a8;

var over = false;

function firstmine() {
  var r = Math.floor(Math.random() * 9 + 1);
  var c = Math.floor(Math.random() * 18 + 1);
  mine1 = r + '' + c;
  x1 = r - 1 + '' + (c - 1);
  x2 = r - 1 + '' + c;
  x3 = r - 1 + '' + (c + 1);
  x4 = r + '' + (c - 1);
  x5 = r + '' + (c + 1);
  x6 = r + 1 + '' + (c - 1);
  x7 = r + 1 + '' + c;
  x8 = r + 1 + '' + (c + 1);
}

function secondmine() {
  var r = Math.floor(Math.random() * 9 + 1);
  var c = Math.floor(Math.random() * 18 + 1);
  mine2 = r + '' + c;
  y1 = r - 1 + '' + (c - 1);
  y2 = r - 1 + '' + c;
  y3 = r - 1 + '' + (c + 1);
  y4 = r + '' + (c - 1);
  y5 = r + '' + (c + 1);
  y6 = r + 1 + '' + (c - 1);
  y7 = r + 1 + '' + c;
  y8 = r + 1 + '' + (c + 1);
}

function thirdmine() {
  var r = Math.floor(Math.random() * 9 + 1);
  var c = Math.floor(Math.random() * 18 + 1);
  mine3 = r + '' + c;
  z1 = r - 1 + '' + (c - 1);
  z2 = r - 1 + '' + c;
  z3 = r - 1 + '' + (c + 1);
  z4 = r + '' + (c - 1);
  z5 = r + '' + (c + 1);
  z6 = r + 1 + '' + (c - 1);
  z7 = r + 1 + '' + c;
  z8 = r + 1 + '' + (c + 1);
}

function treasure() {
  var r = Math.floor(Math.random() * 9 + 1);
  var c = Math.floor(Math.random() * 18 + 1);
  treasure1 = r + '' + c;
  a1 = r - 1 + '' + (c - 1);
  a2 = r - 1 + '' + c;
  a3 = r - 1 + '' + (c + 1);
  a4 = r + '' + (c - 1);
  a5 = r + '' + (c + 1);
  a6 = r + 1 + '' + (c - 1);
  a7 = r + 1 + '' + c;
  a8 = r + 1 + '' + (c + 1);

  hint(r);
}

function mindBuild() {
  firstmine();
  secondmine();
  thirdmine();
  treasure();
}

function press(obj) {
  if (over == false) {
    var userPress = Number(obj.id);
    if (userPress == mine1 || userPress == mine2 || userPress == mine3) {
      obj.style.backgroundColor = 'red';
      obj.innerHTML = 'Boom!';
      gameOverSound();
      gameOverDisplay();
    } else if (
      userPress == x1 ||
      userPress == x2 ||
      userPress == x3 ||
      userPress == x4 ||
      userPress == x5 ||
      userPress == x6 ||
      userPress == x7 ||
      userPress == x8 ||
      userPress == y1 ||
      userPress == y2 ||
      userPress == y3 ||
      userPress == y4 ||
      userPress == y5 ||
      userPress == y6 ||
      userPress == y7 ||
      userPress == y8 ||
      userPress == z1 ||
      userPress == z2 ||
      userPress == z3 ||
      userPress == z4 ||
      userPress == z5 ||
      userPress == z6 ||
      userPress == z7 ||
      userPress == z8
    ) {
      playClick();
      obj.style.backgroundColor = 'red';
      gameLose(obj);
    } else if (userPress == treasure1) {
      gamewinSound();
      obj.style.backgroundColor = 'cyan';
      gameWinDisplay();
      obj.innerHTML = 'Bingo!';
    } else if (
      userPress == a1 ||
      userPress == a2 ||
      userPress == a3 ||
      userPress == a4 ||
      userPress == a5 ||
      userPress == a6 ||
      userPress == a7 ||
      userPress == a8
    ) {
      playClick();
      obj.style.backgroundColor = 'cyan';
      gameLose(obj);
    } else {
      playClick();
      obj.style.backgroundColor = '#777';
      gameLose(obj);
    }
  }
}

function gameOverDisplay() {
  over = true;
  for (let i = 0; i < 162; i++) {
    document.getElementsByClassName('cell')[i].style.backgroundColor = 'red';
    document.getElementsByClassName('cell')[i].style.color = 'white';
  }

  document.getElementById('56').innerHTML = 'G';
  document.getElementById('57').innerHTML = 'A';
  document.getElementById('58').innerHTML = 'M';
  document.getElementById('59').innerHTML = 'E';

  document.getElementById('511').innerHTML = 'O';
  document.getElementById('512').innerHTML = 'V';
  document.getElementById('513').innerHTML = 'E';
  document.getElementById('514').innerHTML = 'R';
}

function gameWinDisplay() {
  over = true;
  for (let i = 0; i < 162; i++) {
    document.getElementsByClassName('cell')[i].style.backgroundColor = 'cyan';
    document.getElementById('56').innerHTML = 'Y';
    document.getElementById('57').innerHTML = 'O';
    document.getElementById('58').innerHTML = 'U';

    document.getElementById('510').innerHTML = 'F';
    document.getElementById('511').innerHTML = 'O';
    document.getElementById('512').innerHTML = 'U';
    document.getElementById('513').innerHTML = 'N';
    document.getElementById('514').innerHTML = 'D';

    document.getElementById('67').innerHTML = 'T';
    document.getElementById('68').innerHTML = 'R';
    document.getElementById('69').innerHTML = 'E';
    document.getElementById('610').innerHTML = 'A';
    document.getElementById('611').innerHTML = 'S';
    document.getElementById('612').innerHTML = 'U';
    document.getElementById('613').innerHTML = 'R';
    document.getElementById('614').innerHTML = 'E';
  }
}

function gameLose(obj) {
  obj.setAttribute('class', 'cell finish');
  var finishcell = document.getElementsByClassName('finish');
  var move = document.getElementById('move');

  if (finishcell.length == 10) {
    move.innerHTML = 10 - 10 + ' ';
    obj.style.backgroundColor = 'red';
    gameOverSound();
    gameOverDisplay();
  } else {
    for (var i = 0; i <= finishcell.length; i++) {
      move.innerHTML = 10 - i + ' ';
    }
  }
}

function hint(r) {
  document.getElementById('hint').innerHTML = r;
}

function playClick() {
  var audio = document.getElementById('clickvoice');
  audio.play();
}

function gameOverSound() {
  var audio = document.getElementById('gameover');
  audio.play();
}

function gamewinSound() {
  var audio = document.getElementById('gamewin');
  audio.play();
}
