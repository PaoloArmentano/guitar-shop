'use strict';

console.log("Welcome to my guitar shop");

const container = document.getElementById("container")
const card = document.getElementById("guitar-card");
const img = document.getElementById("guitar-image");
const guitarName = document.getElementById("guitar-name");
const guitarPrice = document.getElementById("price");
const guitarStock = document.getElementById("stock");
const button = document.getElementById("basket-btn");

const allGuitars = [];


function Guitar(name, price, stock){
    this.name = name;
    this.img = "./images/" + name + ".jpg";
    this.price = price;
    this.stock = stock;
    allGuitars.push(this);
}



function renderGuitars() {
    let ul = document.querySelector("ul");
    for (let i = 0; i < allGuitars.length; i++) {
      let guitarImage = document.createElement("img");
      guitarImage.textContent = allGuitars[i].img;
      ul.appendChild(li);

      let guitarName = document.createElement("p")
      guitarName.textContent = allGuitars[i].name;
      container.appendChild(guitarName)

      let guitarPrice = document.createElement("p");
      guitarPrice.textContent = allGuitars[i].price;
      container.appendChild(guitarPrice)

      let guitarStock = document.createElement("p");
      guitarStock.textContent = allGuitars[i].stock;
      container.appendChild(guitarStock)


    }
  }

const pinky = new Guitar("Fender Strat", "Price: £2000", "hi");
console.log(pinky);
// declare variable guitar container
// create function render guitars
// this function will loop through array, everytime it loops, it will create card through dom manipulation 
// at the end of render function append card to guitar container