var firstClick = false;
var secondClick = false;
var x = '';
var y = '';
var click = document.getElementsByClassName('click');
var cells = document.getElementsByTagName('td');
var table = document.getElementById('table');
var timeCount = document.getElementById('timeCount');

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
  document.getElementById('one').disabled = false;
  document.getElementById('two').disabled = false;
  document.getElementById('three').disabled = false;
  document.getElementById('start').disabled = true;
  document.getElementById('one').style.background = '#00f';
  document.getElementById('two').style.background = '#00f';
  document.getElementById('three').style.background = '#00f';
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
    table.style.zIndex = '4';
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

  timeCount.innerHTML = e.value;

  function decreasingTimeCount() {
    setTimeout(() => {
      +timeCount.innerHTML--;
      if (timeCount.innerHTML == 0) {
        gameOver();
      }
    }, 2000);
  }
  const decreasing = setInterval(decreasingTimeCount, 1000);
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
  document.getElementById('gameOverBox').style.display = 'block';
  document.getElementById('cover').style.display = 'block';
  document.getElementById('cover').style.zIndex = '19';
}

/**
 * PLAY AGAIN
 */
function playAgain() {
  window.location.reload();
}
