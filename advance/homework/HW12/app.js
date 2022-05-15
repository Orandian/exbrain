var circle = document.getElementById('circle');
var btns = document.getElementsByTagName('button');

function getTime(e) {
  disabledButton();
  circle.style.visibility = 'visible';
  circle.innerHTML = e.value;

  function decreasingTimeCount() {
    setTimeout(() => {
      +circle.innerHTML--;

      if (circle.innerHTML == 0) {
        circle.style.visibility = 'hidden';
        enabledButton();
      }
    }, 500);
  }
  const decreasing = setInterval(decreasingTimeCount, 1000);
  stopDecreasingTimeCount(decreasing, e.value);
}

function stopDecreasingTimeCount(decreasing, interval) {
  setTimeout(() => {
    clearInterval(decreasing);
  }, interval * 1000);
}

function disabledButton() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
  }
}

function enabledButton() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].disabled = false;
  }
}
