/**
Juggle Garden
Alex Cho

Add a(nother) form of user-control[LOG]
Add a new class and objects[Coins]
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

let score = {
  amount: 0,
  add: 1,
};

let lilypad;
let log;
let lake;

let coins = [];
let numCoins = 3;

let frogs = [];
let numFrogs = 5;

let state = 'goodend'

function preload() {

  landscape.image = loadImage('assets/images/landscape.png');
  stateScreens.image = loadImage('assets/images/Title.png');
  stateScreens.image2 = loadImage('assets/images/help.png');
  stateScreens.image3 = loadImage('assets/images/badending.png');
  stateScreens.image4 = loadImage('assets/images/goodending.png');
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

  for (let i = 0; i < numCoins; i++) {
    let x = random(0,width);
    let y = random(-500,-100);
    let coin = new Coin(x,y);
    coins.push(coin);
  }
}

function draw() {
  if (state === 'title') {
    titleScreen();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'badend') {
    endBad();
  }
  else if (state === 'goodend') {
    endGood();
  }
}

function titleScreen() {
  imageMode(CENTER);
  image(stateScreens.image,stateScreens.x,stateScreens.y,stateScreens.w,stateScreens.h);

//Reset coin amount
  score.amount = 0;
//Reset log position
  log.x = canvasSize.x/2;
  log.y = 610;
}

function simulation() {
  background(0);

//Landscape being Displayed
  imageMode(CENTER);
  image(landscape.image,landscape.x,landscape.y,landscape.w,landscape.h);

  lake.display();
  frogSettings();
  coinSettings();
  userSettings();
}

function endBad() {
  imageMode(CENTER);
  image(stateScreens.image3,stateScreens.x,stateScreens.y,stateScreens.w,stateScreens.h);
}

function endGood() {
  imageMode(CENTER);
  image(stateScreens.image4,stateScreens.x,stateScreens.y,stateScreens.w,stateScreens.h);
}

//Frog Settings
function frogSettings() {
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
}
//Coin Settings
function coinSettings() {
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (coin.active) {
      coin.gravity(gravityForce);
      coin.move();
      coin.bounce(log);
      coin.hit(lilypad);
      coin.display();
    }
  }
}
//User Settings
function userSettings() {
//Lilypad being Displayed
  lilypad.move();
  lilypad.display();
  lilypad.scoreDisplay();

//Log being displayed
  log.move();
  log.display();
}

//mouse clicked entities
function mouseClicked() {
//TITLE TO SIMULATION
  if (state === 'title') {
    if (mouseX > 140 && mouseX < 450) {
    if (mouseY > 460 && mouseY < 650) {
    state = 'simulation';
      }
    }
  }
  if (state === 'goodend') {
    if (mouseX > 950 && mouseX < 1220) {
    if (mouseY > 460 && mouseY < 680) {
    state = 'title';
      }
    }
  }
}
