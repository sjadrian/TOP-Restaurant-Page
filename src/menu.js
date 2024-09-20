// menu.js

import salsicciaPizza from "./images/pizzas/salsiccia.png";
import gamberiPizza from "./images/pizzas/gamberi.png";
import pepePizza from "./images/pizzas/pepe.png";
import disgustoPizza from "./images/pizzas/disgustoso.png";
import coloratoPizza from "./images/pizzas/colorato.png";
import pomodoroPizza from "./images/pizzas/pomodoro.png";
import cremaPizza from "./images/pizzas/crema.png";
import carnePizza from "./images/pizzas/carne.png";

const pizzas = [
    {
        name : 'Salsiccia',
        ingredient : 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
        src: salsicciaPizza,
    },
    {
        name : 'Gamberi',
        ingredient : 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
        src: gamberiPizza,
    },
    {
        name : 'Pepe',
        ingredient : 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
        src: pepePizza,
    },
    {
        name : 'Disgustoso',
        ingredient : 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
        src: disgustoPizza,
    },
    {
        name : 'Colorato',
        ingredient : 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
        src: coloratoPizza,
    },
    {
        name : 'Pomodoro',
        ingredient : 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
        src: pomodoroPizza,
    },
    {
        name : 'Crema',
        ingredient : 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
        src: cremaPizza,
    },
    {
        name : 'Carne',
        ingredient : 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
        src: carnePizza,
    },
]

export function menuLoad() {
    console.log("menu load called");

    const content = document.getElementById("content");

    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-container");


    // repeat from here
    pizzas.forEach(pizza => {
        console.log(pizza.name);

        //make item div
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-container");

        const menuImgDiv = document.createElement("div");
        menuImgDiv.classList.add("menu-image");

        const image = document.createElement("img");
        image.src = pizza.src;
        image.id = `pizza-image`;

        menuImgDiv.appendChild(image);

        const menuTitleDiv = document.createElement("div");
        menuTitleDiv.classList.add("menu-title");
        menuTitleDiv.innerHTML = pizza.name;

        const menuIngredDiv = document.createElement("div");
        menuIngredDiv.classList.add("menu-ingredient");
        menuIngredDiv.innerHTML = pizza.ingredient;

        itemDiv.appendChild(menuImgDiv);
        itemDiv.appendChild(menuTitleDiv);
        itemDiv.appendChild(menuIngredDiv);


        gridDiv.appendChild(itemDiv);
    });

    // const itemDiv = document.createElement("div");
    // itemDiv.classList.add("item-container");

    // const menuImgDiv = document.createElement("div");
    // menuImgDiv.classList.add("menu-image");


    // const image = document.createElement("img");
    // image.src = salsicciaPizza;
    // image.id = `pizza-image`;
    
    // menuImgDiv.appendChild(image);

    // const menuTitleDiv = document.createElement("div");
    // menuTitleDiv.classList.add("menu-title");
    // menuTitleDiv.innerHTML = `Salsiccia`;

    // const menuIngredDiv = document.createElement("div");
    // menuIngredDiv.classList.add("menu-ingredient");
    // menuIngredDiv.innerHTML = `Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil`;

    // itemDiv.appendChild(menuImgDiv);
    // itemDiv.appendChild(menuTitleDiv);
    // itemDiv.appendChild(menuIngredDiv);
    // gridDiv.appendChild(itemDiv);

    // to here

    content.appendChild(gridDiv);
}