'use strict';

console.log("Welcome to my guitar shop");

const container = document.getElementById("container")
const card = document.getElementById("guitar-card");
const img = document.getElementById("guitar-image");
const guitarName = document.getElementById("guitar-name");
const guitarPrice = document.getElementById("price");
const guitarStock = document.getElementById("stock");
const button = document.getElementById("basket-btn");

console.log("Welcome to my guitar shop");

const allGuitars = [];

function Guitar(name, src, price, stock) {
  this.name = name;
  this.src = "./images/" + src + ".jpg";
  this.price = price;
  this.stock = stock;
  allGuitars.push(this);
}

function renderGuitars() {
  const guitarContainer = document.getElementById("guitar-container");

  for (let i = 0; i < allGuitars.length; i++) {
    const guitar = allGuitars[i];

    const guitarCard = document.createElement("div");
    guitarCard.setAttribute("class", "guitar-card");

    const guitarImage = document.createElement("img");
    guitarImage.setAttribute("src", guitar.src);
    guitarImage.setAttribute("alt", guitar.name);
    guitarCard.appendChild(guitarImage);

    const guitarName = document.createElement("p");
    guitarName.textContent = guitar.name;
    guitarCard.appendChild(guitarName);

    const guitarPrice = document.createElement("p");
    guitarPrice.textContent = guitar.price;
    guitarCard.appendChild(guitarPrice);

    const guitarStock = document.createElement("p");
    guitarStock.textContent = guitar.stock;
    guitarCard.appendChild(guitarStock);

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Basket";
    guitarCard.appendChild(addButton);

    guitarContainer.appendChild(guitarCard);
  }
}

const pinky = new Guitar("Fender Strat", "fender-pink", "Price: £1000", "In stock");
console.log(pinky);

renderGuitars();
// declare variable guitar container
// create function render guitars
// this function will loop through array, everytime it loops, it will create card through dom manipulation 
// at the end of render function append card to guitar container