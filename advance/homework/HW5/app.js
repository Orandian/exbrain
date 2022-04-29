var display = document.getElementById('display');
var userInput = document.getElementById('userInput');
var capLock = document.getElementById('caplock');

// to add keyword in the display
function typing(e) {
  var text = '';
  // to check Caplock is open or not
  if (capLock.checked == true) {
    text = e.value.toUpperCase();
  } else {
    text = e.value.toLowerCase();
  }
  display.innerHTML += text;
}

// to clear the display and input box
function blank() {
  display.innerHTML = '';
  userInput.value = '';
}

// charAt function
function charat() {
  window.alert(display.innerHTML.charAt(userInput.value));
}

// charCodeAt function
function charcodeat() {
  window.alert(display.innerHTML.charCodeAt(userInput.value));
}

// toUpperCase function
function touppercase() {
  window.alert(display.innerHTML.toUpperCase());
}

// toLowerCase function
function tolowercase() {
  window.alert(display.innerHTML.toLowerCase());
}

// trim function
function trim() {
  window.alert(display.innerHTML.trim());
}

// includes function
function includes() {
  window.alert(display.innerHTML.includes(userInput.value));
}

// indexOf function
function indexof() {
  window.alert(display.innerHTML.indexOf(userInput.value));
}

// lastIndexOf function
function lastindexof() {
  window.alert(display.innerHTML.lastIndexOf(userInput.value));
}

// startsWith function
function startswith() {
  window.alert(display.innerHTML.startsWith(userInput.value));
}

// endsWith function
function endswith() {
  window.alert(display.innerHTML.endsWith(userInput.value));
}

// if press wrong key
function invalid() {
  window.alert('Invalid Key');
}
