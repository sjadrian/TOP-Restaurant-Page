// contact.js

import locationImg from "./images/restaurant-location.png";

export function contactLoad() {
    console.log("contact load called");

    const content = document.getElementById("content");

    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `📞 123 456 789`;
    phoneDiv.id = `phone-number`;

    const addressDiv = document.createElement("div");
    addressDiv.innerHTML = `🏠 Hollywood Boulevard 42, Los Angeles, USA`;
    addressDiv.id = `address`;

    const image = document.createElement("img");
    image.src = locationImg;
    image.id = `location-image`;

    content.appendChild(phoneDiv);
    content.appendChild(addressDiv);
    content.appendChild(image);
}
