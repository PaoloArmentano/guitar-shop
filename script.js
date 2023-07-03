'use strict';

console.log("Welcome to my guitar shop");


const card = document.getElementById("guitar-card");
const img = document.getElementById("guitar-image");
const guitarName = document.getElementById("guitar-name");
const guitarPrice = document.getElementById("price");
const guitarStock = document.getElementById("stock");
const button = document.getElementById("basket-btn");

const allGuitars = [];


function Guitar(name, img, price, stock){
    this.name = name;
    this.img = img;
    this.price = price;
    this.stock = stock;
    allGuitars.push(this);
}

const pinky = new Guitar("Fender Strat", "", "Price: £2000", "hi");
console.log(pinky);