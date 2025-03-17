import "../styles/style.css"
import { registerMouseStuff } from "./global.js";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu.js";
import { loadReservePage } from "./reserve.js";

console.log("Ninki is the fucking best in the whole universe you hear me?");
registerMouseStuff();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const reserveBtn = document.querySelector("#reserve");
let currentPage = 'home';

function clearContent() {
    content.innerHTML = '';
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    reserveBtn.classList.remove('active');
}

homeBtn.addEventListener('click', () => {
    console.log('home clicked');
    if (currentPage !== 'home') {
        clearContent();
        loadHomePage(content, homeBtn);
    }
    currentPage = 'home';
});

menuBtn.addEventListener('click', () => {
    console.log('menu clicked');
    if (currentPage !== 'menu') {
        clearContent();
        loadMenuPage(content, menuBtn);
    }
    currentPage = 'menu';
});

reserveBtn.addEventListener('click', () => {
    console.log('menu clicked');
    if (currentPage !== 'reserve') {
        clearContent();
        loadReservePage(content, reserveBtn);
    }
    currentPage = 'reserve';
});
