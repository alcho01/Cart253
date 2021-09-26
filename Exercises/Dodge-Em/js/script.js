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
};

let burger = {
  x: 0,
  y: 250,
  w: 100,
  h: 100,
  vx: 0,
  vy: 0,
  speed: 5
};

//preloading my images
function preload() {
  //man.image = loadImage('assets/images/man.png'); //Made in Illustrator
  hamburger.image = loadImage('assets/images/hamburger.png'); //Made in Illustrator
}

function setup() {
//Setting Canvas Size
createCanvas(windowWidth,windowHeight);

//Burger positioning
burger.y = random(0,height);
burger.vx = burger.speed
}


/**
Description of draw()
*/
function draw() {
backgrnd();
hamburger();
}

//Defining Background
function backgrnd() {
  background(bg.r,bg.g,bg.b);
}

//Hamburger Settings
function hamburger(){

//Defining The Hamburger
  imageMode(CENTER);
  image(hamburger.image,burger.x,burger.y,burger.w,burger.h);

//Burger Movement
  burger.x = burger.x + burger.vx;
  burger.y = burger.y + burger.vy;

//If burger is past the screen it respawns on the left
  if(burger.x > width) {
    burger.x = 0;
    burger.y = random(0,height);
  }
}
