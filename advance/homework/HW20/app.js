const toggle = document.getElementById("toggle");
const html = document.querySelector("html");

function toggleDarkMode() {
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
