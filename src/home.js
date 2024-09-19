export function homeLoad() {
    console.log("page load called");

    const content = document.getElementById("content");

    const textDiv = document.createElement("div");

    textDiv.innerHTML = `Best pizza in your country <br>
    Made with passion since 1908 <br>
    Order online or visit us! `;

    content.appendChild(textDiv);
}