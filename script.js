'use strict';

console.log("Welcome to my guitar shop");

const guitarContainer = document.getElementById("guitar-container");
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
  this.src = "./images/" + src;
  this.price = price;
  this.stock = stock;
  allGuitars.push(this);
}

function renderGuitars() {
  

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

const pinky = new Guitar("Fender Strat", "pinky.jpeg", "Price: £1000", "In stock");
const angelico = new Guitar("D'Angelico Premier Mini", "dangelico.jpeg", "Price: £699", "In stock");
const gibson = new Guitar("Gibson ES 335", "335.jpeg", "Price: £4200", "In stock");
const lowden = new Guitar("Lowden Wee 25", "lowden.jpeg", "Price: £2700", "Out of stock");
const prs = new Guitar("Prs", "prs.jpeg", "Price: £3799", "In stock");
const suhr = new Guitar("Suhr", "suhr.jpeg", "Price: £3259", "In stock");
const martin = new Guitar("Martin D-45", "martind45.jpeg", "Price: £2799", "In stock");
const lespaul = new Guitar("Gibson Les Paul", "lespaul.jpeg", "Price: £2699", "In stock");
const silversky = new Guitar("Prs Silver Sky", "silversky.jpeg", "Price: £2499", "In stock");
const telly = new Guitar("Fender Telecaster", "telecaster.jpeg", "Price: £2999", "In stock");
const sg = new Guitar("Gibson SG", "sg.jpeg", "Price: £1999", "In stock");
const epiphone = new Guitar("Epiphone Noel Gallagher Riviera", "epiphone-gallagher.jpeg", "Price: £799", "In stock");
const jaguar = new Guitar("Fender Jaguar", "jaguar.jpeg", "Price: £2799", "In stock");
const bbking = new Guitar("Gibson BB King", "bbking.jpeg", "Price: £5799", "In stock");
const ibanez = new Guitar("Ibanez", "ibanez.jpeg", "Price: £2799", "In stock");



renderGuitars();
// declare variable guitar container
// create function render guitars
// this function will loop through array, everytime it loops, it will create card through dom manipulation 
// at the end of render function append card to guitar container