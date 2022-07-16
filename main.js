const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
hamburger.addEventListener("click", function () {
  navItems.classList.toggle("active");
});

[...navItems.children].forEach((item) => {
  item.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });
});
