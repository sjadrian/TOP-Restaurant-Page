// menu.js

export function menuLoad() {
    console.log("menu load called");

    const content = document.getElementById("content");

    // //clear existing content
    // content.innerHTML = '';

    const textDiv = document.createElement("div");
    textDiv.innerHTML = `Menu`;
    
    content.appendChild(textDiv);
}