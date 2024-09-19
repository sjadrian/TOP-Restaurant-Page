/* index.js */
import "./styles.css";
import { homeLoad } from "./home";
import { menuLoad } from "./menu";
import { contactLoad } from "./contact";


const states = {
    HOME: 0,
    MENU: 1,
    CONTACT: 2,
};

let active = states.HOME;


document.addEventListener('DOMContentLoaded', () => { 
    // initial home page load
    homeLoad();

    const homeButton = document.getElementById('home-button');
    const menuButton = document.getElementById('menu-button');
    const contactButton = document.getElementById('contact-button');


    homeButton.onclick = () => setActiveState(states.HOME, homeButton);
    menuButton.onclick = () => setActiveState(states.MENU, menuButton);
    contactButton.onclick = () => setActiveState(states.CONTACT, contactButton);
});



function setActiveState(newState, button) {
    if (active !== newState) {
        active = newState;
        clearContent();
        updateContent(newState);
        updateButtonSyles(button);
    }
}

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = '';
}

function updateContent(state) {
    switch(state) {
        case states.HOME:
            homeLoad();
            break;
        case states.MENU:
            menuLoad();
            break;
        case states.CONTACT:
            contactLoad();
            break;
        default:
            homeLoad();
    }
}

function updateButtonSyles(activeButton) {
    const buttons = [
        document.getElementById('home-button'), 
        document.getElementById('menu-button'), 
        document.getElementById('contact-button')
    ];
    buttons.forEach(button => {
        if (button === activeButton) {
            button.style.borderBottom = "1px white solid";
        } else {
            button.style.borderBottom = "none";
        }
    });
}