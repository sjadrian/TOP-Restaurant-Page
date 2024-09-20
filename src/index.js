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
    const content = document.getElementById("content");
    content.classList.add("visible"); 
    homeLoad();
    // menuLoad();
    // contactLoad();

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

        // clearContent();
        // updateContent(newState);
        // updateButtonSyles(button);

        // Wait for the fade-out to complete before clearing content
        // setTimeout(() => {
        //     clearContent();
        //     updateContent(newState);
        //     content.classList.add("visible"); // Fade-in
        // }, 300); // Match this timeout to the transition duration in the CSS


        // with transition
        const content = document.getElementById("content");

        // Start fade-out
        content.classList.remove("visible");  /* Remove visibility to start fade-out */

        // Wait for fade-out to complete before clearing and updating content
        setTimeout(() => {
            clearContent();
            updateContent(newState, () => {
                // Start fade-in only after content is fully loaded
                content.classList.add("visible");  /* Add visibility to start fade-in */
            });
            updateButtonStyles(button);
        }, 300); // Match this timeout to the transition duration in the CSS

    }
}

function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = '';
}

function updateContent(state, callback) {
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
    // Call the callback to trigger the fade-in
    callback(); 
}

function updateButtonStyles(activeButton) {
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