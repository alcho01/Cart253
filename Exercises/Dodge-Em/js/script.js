/**
Dodge-Em
Alex Cho

Change the way the user controls their circle
Add at least one new if-statement
Change the way the simulation looks
Use at least one image
*/

"use strict";

let bg = {
  r: 0,
  g: 68,
  b: 120
}

//preloading my images
function preload() {
  //man.image = loadImage('assets/images/man.png'); //Made in Illustrator
  hamburger.image = loadImage('assets/images/hamburger.png'); //Made in Illustrator
}

function setup() {
//Setting Canvas Size
createCanvas(windowWidth,windowHeight);

}


/**
Description of draw()
*/
function draw() {
backgrnd();
}

//Defining Background
function backgrnd() {
  background(bg.r,bg.g,bg.b);
}

//Hamburger Settings
function hamburger(){
  let burger = {
    x: 0,
    y: 250,
    w: 100,
    h: 100,
    vx: 0,
    vy: 0,
    speed: 10
  };

//Defining The Hamburger
  imageMode(CENTER);
  image(hamburger.image,burger.x,burger.y,burger.w,burger.h);

}
