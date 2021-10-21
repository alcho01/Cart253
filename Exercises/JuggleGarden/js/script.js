/**
Juggle Garden
Alex Cho

Add a(nother) form of user-control[]
Add a new class and objects[]
Add at least two endings[]
*/

"use strict";

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

let gravityForce = 0.0025;

let lilypad;

let lake;

let frogs = [];
let numFrogs = 5;

function preload() {

  landscape.image = loadImage('assets/images/landscape.png');

}

function setup() {
  createCanvas(canvasSize.x,canvasSize.y);

  lilypad = new Lilypad(250,30);
  lake = new Lake(1250,700, 2800, 290);

  for (let i = 0; i < numFrogs; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let frog = new Frog(x,y);
    frogs.push(frog);
  }
}

function draw() {
  background(0);

//Landscape being Displayed
  imageMode(CENTER);
  image(landscape.image,landscape.x,landscape.y,landscape.w,landscape.h);

  //Lake being Displayed
    lake.display();

  //Frog Settings
    for (let i = 0; i < frogs.length; i++) {
      let frog = frogs[i];
      frog.gravity(gravityForce);
      frog.move();
      frog.bounce();
      frog.display();
    }

//Lilypad being Displayed
  lilypad.move();
  lilypad.display();


}
