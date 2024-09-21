import chefImage from "./images/chef.png";

export function homeLoad() {
    console.log("page load called");

    const content = document.getElementById("content");

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-container");
    textDiv.innerHTML = `Best pizza in your country`

    const textDiv2 = document.createElement("div");
    textDiv2.classList.add("text-container");
    textDiv2.innerHTML = `Made with passion since 1908`;

    content.appendChild(textDiv);
    content.appendChild(textDiv2);

    const imgDiv = document.createElement("div");
    imgDiv.id = `chef-image-container`;
   
    const image = document.createElement("img");
    image.src = chefImage;
    image.id = `chef-image`;
    
    imgDiv.appendChild(image);
    content.appendChild(imgDiv);

    const textDiv3 = document.createElement("div");
    textDiv3.classList.add("text-container");
    textDiv3.innerHTML = `Order online or visit us!`;

    content.appendChild(textDiv3);
}