var display = document.getElementById('display');
var userInput = document.getElementById('userInput');
var capLock = document.getElementById('caplock');

function typing(e) {
  var text = '';
  if (capLock.checked == true) {
    text = e.value.toUpperCase();
  } else {
    text = e.value.toLowerCase();
  }
  display.innerHTML += text;
}

function blank() {
  display.innerHTML = '';
  userInput.value = '';
}

function charat() {
  window.alert(display.innerHTML.charAt(userInput.value));
}

function charcodeat() {
  window.alert(display.innerHTML.charCodeAt(userInput.value));
}

function touppercase() {
  window.alert(display.innerHTML.toUpperCase());
}

function tolowercase() {
  window.alert(display.innerHTML.toLowerCase());
}

function trim() {
  window.alert(display.innerHTML.trim());
}

function includes() {
  window.alert(display.innerHTML.includes(userInput.value));
}

function indexof() {
  window.alert(display.innerHTML.indexOf(userInput.value));
}

function lastindexof() {
  window.alert(display.innerHTML.lastIndexOf(userInput.value));
}

function startswith() {
  window.alert(display.innerHTML.startsWith(userInput.value));
}

function endswith() {
  window.alert(display.innerHTML.endsWith(userInput.value));
}

function clear() {
  display.innerHTML = '';
}

function invalid() {
  window.alert('Invalid Key');
}
