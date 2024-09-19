// contact.js

export function contactLoad() {
    console.log("contact load called");

    const content = document.getElementById("content");

    // //clear existing content
    // content.innerHTML = '';

    const textDiv = document.createElement("div");
    textDiv.innerHTML = `Contact`;
    
    content.appendChild(textDiv);
}
