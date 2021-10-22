/**
Juggle Garden
Alex Cho

Add a(nother) form of user-control[LOG]
Add a new class and objects[]
Add at least two endings[]
*/

"use strict";

let canvasSize = {
  x: 1250,
  y: 700,
};

let stateScreens = {
  x: 625,
  y: 350,
  w: 1250,
  h: 700,
  image: undefined,
  image2: undefined,
  image3: undefined,
  image4: undefined,
}

let landscape = {
  x: 625,
  y: 350,
  w: 1250,
  h: 700,
  image: undefined
};

let gravityForce = 0.0025;

let lilypad;

let log;

let lake;

let frogs = [];
let numFrogs = 5;

function preload() {

  landscape.image = loadImage('assets/images/landscape.png');
  stateScreens.image = loadImage('assets/images/Title.png');
  stateScreens2.image = loadImage('assets/images/help.png');
  stateScreens3.image = loadImage('assets/images/badending.png');
  stateScreens4.image = loadImage('assets/images/goodending.png');
}

function setup() {
  createCanvas(canvasSize.x,canvasSize.y);



  lilypad = new Lilypad(250,30);
  log = new Log(200,40,canvasSize.x/2,);
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
  if (frog.active) {
  frog.gravity(gravityForce);
  frog.move();
  frog.bounce(lilypad);
  frog.bounce2(log);
  frog.display();
  frog.splash();
          }
        }

//Lilypad being Displayed
  lilypad.move();
  lilypad.display();

//Log being displayed
  log.move();
  log.display();


}
