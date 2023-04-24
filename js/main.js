let btn = document.querySelector(".icons");
let header = document.querySelector(".header");
let logo = document.querySelector(".logo");
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
});

window.addEventListener("scroll", function () {
  header.classList.toggle("header-bg", window.scrollY > 100);
  logo.classList.toggle("active", window.scrollY > 100);
});