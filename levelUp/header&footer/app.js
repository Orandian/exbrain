let lists = document.querySelectorAll(".nav_item");

function activeLink() {
  lists.forEach((list) => {
    list.classList.remove("nav_active");
    this.classList.add("nav_active");
  });
}

lists.forEach((list) => {
  list.addEventListener("click", activeLink);
});
