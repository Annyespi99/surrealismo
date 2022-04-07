const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closemenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");

}

openMenuBtn.addEventListener("click",toggleMenu);
closemenuBtn.addEventListener("click",toggleMenu);