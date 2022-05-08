let text = document.getElementById('text');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let result = document.getElementById('result');

function random() {
  let letter = '';
  for (let i = 0; i < 4; i++) {
    let keyCode = Math.floor(Math.random() * (90 - 64 + 1) + 64);
    letter += String.fromCharCode(keyCode);
  }
  text.innerHTML = letter;
}

function press(e) {
  if (item1.innerHTML == '') {
    item1.innerHTML = e.innerHTML;
  } else if (item2.innerHTML == '') {
    item2.innerHTML = e.innerHTML;
  } else if (item3.innerHTML == '') {
    item3.innerHTML = e.innerHTML;
  } else if (item4.innerHTML == '') {
    item4.innerHTML = e.innerHTML;
  }
}

function checkAnswer() {
  let userInput =
    item1.innerHTML + item2.innerHTML + item3.innerHTML + item4.innerHTML;

  if (userInput == text.innerHTML) {
    result.innerHTML = 'Correct!';
    random();
  } else {
    result.innerHTML = 'Wrong!';
  }

  item1.innerHTML = '';
  item2.innerHTML = '';
  item3.innerHTML = '';
  item4.innerHTML = '';
}
