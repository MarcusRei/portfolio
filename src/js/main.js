const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerLines = document.querySelector(".hamburger-symbol");
const navItems = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", expand);

function expand() {
  /* hamburger.classList.toggle("active"); */
  navMenu.classList.toggle("active");
  hamburgerLines.classList.toggle("active");

  //QuerySelectorAll lägger alla element i en lista
  for (let i = 0; i < 3; i++) {
    navItems[i].classList.toggle("active");
  }
}

const projectItem = document.querySelector(".project-item");
console.log(projectItem);

projectItem.addEventListener("click", enterProject);

function enterProject() {
  alert("Nu är du inne i det här projektet!");
}
