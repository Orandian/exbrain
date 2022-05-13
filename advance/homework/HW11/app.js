var firstClick = '';
var secondClick = '';
var x = '';
var y = '';
var click = document.getElementsByClassName('click');
var cells = document.getElementsByTagName('td');
var table = document.getElementById('table');

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

function randomColor() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = colors[i];
    cells[i].value = colors[i];

    setTimeout(() => {
      blind();
    }, 1000);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(colors);
randomColor();

function match(e) {
  if (firstClick == '') {
    firstClick = 'click';
    x = e.value;
    e.classList.toggle('click');
  } else if (secondClick == '') {
    secondClick = 'click';
    y = e.value;
    e.classList.toggle('click');

    toCheckColor(x, y);

    firstClick = '';
    secondClick = '';
    x = '';
    y = '';
  }
}

function toCheckColor(color1, color2) {
  if (color1 == color2) {
    for (let i = 0; i < click.length; i++) {
      click[i].style.background = '#fff';
      click[i].style.border = 'none';
    }
  } else if (color1 != color2) {
    console.log('You lose');
  }
}

function blind() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.border = '3px solid #000';
    cells[i].style.background = '#777';
    table.style.zIndex = '4';
  }
}
