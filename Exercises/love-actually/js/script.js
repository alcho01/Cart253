/**
Love-Actually
Alex Cho

GUIDELINES
Allow the user to control one of the circles
Make the non-user circle move differently
Add at least one extra function
Add at least one extra ending

DUE OCTOBER 7th 2021
*/

"use strict";

let bg = {
  x: 400,
  y: 400,
  w: 800,
  h: 800,

}


function preload() {
  background.image = loadImage('assets/images/background.png');
}



function setup() {
  createCanvas(800,800);

}



function draw() {
  bgset();
}

function bgset() {
  imageMode(CENTER);
  image(background.image,bg.x,bg.y,bg.w,bg.h);
}
