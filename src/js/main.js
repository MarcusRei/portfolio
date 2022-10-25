const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
console.log(hamburger);

hamburger.addEventListener("click", expand);

function expand() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log("active");
}
