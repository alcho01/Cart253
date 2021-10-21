/**
Juggle Garden
Alex Cho

Add a(nother) form of user-control[]
Add a new class and objects[]
Add at least two endings[]
*/

"use strict";

let bgColor = {
  r: 16,
  g: 92,
  b: 115,
};

let canvasSize = {
  x: 1250,
  y: 700,
};

let landscape = {
  x: 625,
  y: 350,
  w: 1250,
  h: 700,
  image: undefined
};

let lilypad;

function preload() {

  landscape.image = loadImage('assets/images/landscape.png');

}

function setup() {
  createCanvas(canvasSize.x,canvasSize.y);

  lilypad = new Lilypad(250,30);
}

function draw() {
  background(bgColor.r,bgColor.g,bgColor.b);

//Landscape being Displayed
  imageMode(CENTER);
  image(landscape.image,landscape.x,landscape.y,landscape.w,landscape.h);

//Lilypad being Displayed
  lilypad.move();
  lilypad.display();

}
