const hamburger = document.getElementsByClassName("hamburger");
const navMenu = document.getElementsByClassName("nav-menu");

hamburger.addEventListener("click", expand);

function expand() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}