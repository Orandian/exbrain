let words = document.getElementsByClassName('word');

window.addEventListener('keydown', dispear);

function dispear(e) {
  let key = e.keyCode;
  let text = String.fromCharCode(key);

  for (let i = 0; i < words.length; i++) {
    if (words[i].innerHTML == text) {
      words[i].style.display = 'none';
    }
  }
}

function random() {
  let letter = '';
  for (let i = 0; i < words.length; i++) {
    let keyCode = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    letter = String.fromCharCode(keyCode);
    words[i].innerHTML = letter;
  }
}
random();
