"use strict"
// Variables
const hamburgerMenu = document.querySelector(".hamburger-menu-icon");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("closed");
})

function checkWindow() {
    if (window.innerWidth <= 768) {
        navMenu.classList.add("closed");
    }
}

window.addEventListener("resize", checkWindow);
window.addEventListener("load", checkWindow);