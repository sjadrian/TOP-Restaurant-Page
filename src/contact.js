// contact.js

import locationImg from "./images/restaurant-location.png";

export function contactLoad() {
    console.log("contact load called");

    const content = document.getElementById("content");

    // //clear existing content
    // content.innerHTML = '';

    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `📞 123 456 789`;
    phoneDiv.id = `phone-number`;

    const addressDiv = document.createElement("div");
    addressDiv.innerHTML = `🏠 Hollywood Boulevard 42, Los Angeles, USA`;
    addressDiv.id = `address`;

    const image = document.createElement("img");
    image.src = locationImg;
    image.id = `ocation-image`;

    content.appendChild(phoneDiv);
    content.appendChild(addressDiv);
    content.appendChild(image);





    // <div id="phone-number">
    //     📞 123 456 789
    // </div>
    // <div id="address">
    //     🏠 Hollywood Boulevard 42, Los Angeles, USA
    // </div>
    // <div class="location-image-container">
    //     <img id="location-image" src="images/restaurant-location.png" alt="">
    // </div>
    
    // content.appendChild(textDiv);
}
