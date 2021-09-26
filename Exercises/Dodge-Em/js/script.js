/**
Dodge-Em
Alex Cho

Change the way the user controls their circle [Done]
Add at least one new if-statement
Change the way the simulation looks
Use at least one image [Done]
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
  w: 80,
  h: 80,
  vx: 0,
  vy: 0,
  speed: 10,
  image: undefined
};

let stickman = {
  x: 0,
  y: 0,
  w: 100,
  h: 100,
  growth: 8,
  shrink: -5,
  vx: -6,
  vx2: 6,
  vy: -6,
  vy2: 6,
  image: undefined
}

//preloading my images
function preload() {
  man.image = loadImage('assets/images/man.png'); //Made in Illustrator
  hamburger.image = loadImage('assets/images/hamburger.png'); //Made in Illustrator
}

function setup() {
//Setting Canvas Size
  createCanvas(windowWidth,windowHeight);

//Burger positioning
  burger.y = random(0,height);
  burger.vx = burger.speed;

//User Spawnpoint
  stickman.x = width / 2;
  stickman.y = height / 2;
}

//Calling the functions
function draw() {
backgrnd();
hamburger();
man();
}

//Defining Background
function backgrnd() {
  background(bg.r,bg.g,bg.b);
}

//Hamburger Settings
function hamburger() {

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

//Stickman Settings
function man() {

//Defining the Stickman
  imageMode(CENTER);
  image(man.image,stickman.x,stickman.y,stickman.w,stickman.h);

//Stickman Movement
if (keyIsDown(LEFT_ARROW)) {
  stickman.x = stickman.x + stickman.vx;
  }
else if (keyIsDown(RIGHT_ARROW)) {
  stickman.x = stickman.x + stickman.vx2;
  }
else if (keyIsDown(UP_ARROW)) {
  stickman.y = stickman.y + stickman.vy;
  }
else if (keyIsDown(DOWN_ARROW)) {
  stickman.y = stickman.y + stickman.vy2;
  }

//Stickman Growth
let d = dist(stickman.x,stickman.y,burger.x,burger.y);
if(d < burger.w / 2  + stickman.w / 2) {
//If stick figure interacts with a burger his width can increase up to 500
  stickman.w = stickman.w + stickman.growth;
} else {
//If stick figure does not interact with a burger he goes back to a width of 100
  stickman.w = stickman.w + stickman.shrink;
//Constrained between 100 and 500
  stickman.w = constrain(stickman.w, 100, 500)
  }

//If the stickman is eating more than enough he will begin to hallucinate
let hallucinate ={
  strk: 255,
  strkW: 5
}
if(stickman.w > 250) {
  for (let i = 0; i <100; i++) {
    let x = random(0,width);
    let y = random(0,height);
    stroke(hallucinate.strk);
    strokeWeight(hallucinate.strkW);
    point(x,y);
    }
  }
}
