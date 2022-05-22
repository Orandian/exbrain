const question = document.getElementById('question');
const addNumbers = document.getElementById('addNumbers');
const result = document.getElementById('result');
const getNumbers = document.getElementsByClassName('getNumber');
let answer = 0;
let randomNumber = 0;

function random() {
  randomNumber = Math.floor(Math.random() * 100);
  question.innerHTML = randomNumber;
}
random();

function getNumber(e) {
  let value = +e.innerHTML;
  answer += value;
  if (addNumbers.innerHTML == '') {
    addNumbers.innerHTML += value;
  } else {
    addNumbers.innerHTML += '+' + value;
  }
  //   addNumbers.innerHTML == "" ? e.innerHTML : "+" + e.innerHTML;
  result.innerHTML = answer;

  if (randomNumber == answer) {
    document.getElementById('tryResult').innerHTML = 'You Win!';
    for (let i = 0; i < getNumbers.length; i++) {
      getNumbers[i].onclick = null;
    }
  }

  if (answer > randomNumber) {
    document.getElementById('tryResult').innerHTML = 'You Lose!';
    for (let i = 0; i < getNumbers.length; i++) {
      getNumbers[i].onclick = null;
    }
  }
}

// NO NEED ONCLICK
// [...getNumbers].forEach((getNumber) => {
//   getNumber.addEventListener('click', (e) => {
//     console.log(e.target.innerHTML);
//   });
// });

function again() {
  window.location.reload();
}
