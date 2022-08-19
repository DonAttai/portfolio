const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const currentYear = document.querySelector("#current-year");
hamburger.addEventListener("click", function () {
  navItems.classList.toggle("active");
});

[...navItems.children].forEach((item) => {
  item.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });
});

currentYear.innerHTML = new Date().getFullYear();
