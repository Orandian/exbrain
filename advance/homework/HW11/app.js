var firstClick = false;
var secondClick = false;
var x = '';
var y = '';
var click = document.getElementsByClassName('click');
var cells = document.getElementsByTagName('td');
var btns = document.getElementsByClassName('btn');
var table = document.getElementById('table');
var timeCount = document.getElementById('timeCount');
var decreasing;

const colors = [
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
  'violet',
  'black',
  'indigo',
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
  'violet',
  'black',
  'indigo',
];

/**
 * TO START THE GAME
 */
function startGame() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].disabled = false;
    btns[i].style.background = '#00f';
  }
  document.getElementById('start').disabled = true;
  document.getElementById('start').style.background = '#333';
}

/**
 * TO SHUFFLE THE ARRAY'S DATAS
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * RANDOMLY ADD COLOR TO THE TABLE'S CELLS
 */
function randomColor() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = colors[i];
    cells[i].value = colors[i];

    setTimeout(() => {
      blind();
    }, 2000);
  }
}

/**
 * TO COVER THE COLOR
 */
function blind() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = '#777';
    table.style.zIndex = '3';
  }
}

/**
 * GET THE TIME COUNT OF THE BUTTON
 * START SHUFFLING THE COLORS' ARRAY DATAS
 * PUT THE COLORS TO THE TABLE'S CELLS
 * START COUNTING THE TIME
 */
function getTime(e) {
  shuffleArray(colors);
  randomColor();
  disabledButton();

  timeCount.innerHTML = e.value;

  function decreasingTimeCount() {
    setTimeout(() => {
      document.getElementById('cover').style.zIndex = '-1';
      +timeCount.innerHTML--;
      if (timeCount.innerHTML == 0) {
        gameOver();
      }
    }, 2000);
  }
  decreasing = setInterval(decreasingTimeCount, 1000);
  stopDecreasingTimeCount(decreasing, e.value);
}

/**
 * TO STOP THE DECREASING OF TIME COUNT
 */
function stopDecreasingTimeCount(decreasing, interval) {
  setTimeout(() => {
    clearInterval(decreasing);
  }, interval * 1000);
}

/**
 * TO MATCH THE COLOR OF USER CLICK
 */
function match(e) {
  e.style.background = e.value;
  if (firstClick == false) {
    firstClick = true;
    x = e.value;
    e.classList.toggle('click');
  } else if (secondClick == false) {
    secondClick = true;
    y = e.value;
    e.classList.toggle('click');

    toCheckColor(x, y);

    firstClick = false;
    secondClick = false;
    x = '';
    y = '';
  }
}

/**
 * TO CHECK SAME COLORS
 */
function toCheckColor(color1, color2) {
  if (color1 == color2) {
    for (let i = 0; i < click.length; i++) {
      click[i].style.background = '#fff';
      click[i].style.border = 'none';
    }
  } else if (color1 != color2) {
    gameOver();
  }
}

/**
 * GAME OVER
 */
function gameOver() {
  disableTable();
  document.getElementById('cover').style.background = 'rgba(0,0,0,0.7)';
  clearInterval(decreasing);
  document.getElementById('gameOverBox').style.display = 'block';
}

/**
 * PLAY AGAIN
 */
function playAgain() {
  window.location.reload();
}

/**
 * TO DISABLED THE TABLE'S CELLS
 */
function disableTable() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = null;
  }
}

/**
 * TO DISABLED THE BTNS
 */
function disabledButton() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = null;
    btns[i].style.background = '#333';
  }
}
