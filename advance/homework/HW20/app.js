const toggle = document.getElementById("toggle");
const html = document.querySelector("html");
const save = document.getElementById("save");

let name = document.getElementById("name");
let position = document.getElementById("position");
let email = document.getElementById("email");
let address = document.getElementById("address");
let phone = document.getElementById("phone");

function toggleDarkMode() {
  name.value = localStorage.getItem("name");
  position.value = localStorage.getItem("position");
  email.value = localStorage.getItem("email");
  address.value = localStorage.getItem("address");
  phone.value = localStorage.getItem("phone");

  if (localStorage.toggleDarkMode == "") {
    toggle.checked = true;
    html.classList.add("dark");
  } else {
    toggle.checked = false;
    html.classList.remove("dark");
  }
}
toggleDarkMode();

toggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.toggleDarkMode = true;
    toggle.checked = false;
  } else {
    html.classList.add("dark");
    localStorage.toggleDarkMode = "";
    toggle.checked = true;
  }
});

save.addEventListener("click", () => {
  localStorage.setItem("name", name.value);
  localStorage.setItem("position", position.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("address", address.value);
  localStorage.setItem("phone", phone.value);
});
