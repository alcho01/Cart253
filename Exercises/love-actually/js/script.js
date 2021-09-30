/**
Love-Actually
Alex Cho

GUIDELINES
Allow the user to control one of the circles [DONE]
Make the non-user circle move differently [DONE]
Add at least one extra function [DONE]
Add at least one extra ending [DONE]

DUE OCTOBER 7th 2021
*/

"use strict";

let bg = {
  x: 400,
  y: 400,
  w: 800,
  h: 800,

};

let title = {
  x: 390,
  y: 410,
  w: 830,
  h: 830,
  image: undefined
};

let safe = {
  x: 390,
  y: 410,
  w: 830,
  h: 830,
  image: undefined
};

let crash = {
  x: 390,
  y: 410,
  w: 830,
  h: 830,
  image: undefined
};

let caught = {
  x: 390,
  y: 410,
  w: 830,
  h: 830,
  image: undefined
};

let user = {
  x: undefined,
  y: undefined,
  w: 150,
  h: 150,
  vx: 0,
  vy: -5,
  vy2: 5,
  speed:20,
  speedmin: 1,
  image: undefined
};

let botcar = {
  x: undefined,
  y: undefined,
  w: 150,
  h: 150,
  vx: 0,
  vy: 0,
  speed: 5,
  speedmin: -5,
  image: undefined
};

let cop = {
  x: -300,
  y: undefined,
  w: 150,
  h: 150,
  vx: 0,
  vy: 0,
  speed: 10,
  speedmin: 6,
  image: undefined
};

//GAME OPENS WITH
let state = 'title'

//LOADING ASSETS
function preload() {
  background.image = loadImage('assets/images/background.png');
  user.image = loadImage('assets/images/usercar.png');
  botcar.image = loadImage('assets/images/aicar.png');
  title.image = loadImage('assets/images/title.png');
  safe.image = loadImage('assets/images/safe.png');
  crash.image = loadImage('assets/images/crash.png');
  cop.image = loadImage('assets/images/copcar.png');
  caught.image = loadImage('assets/images/caught.png');
}

function setup() {
//Setting Up the Canvas
  createCanvas(800,800);

//User Car Spawn
  user.x = width/5;
  user.y = height/2;

//Bot Car Spawn
  botcar.x = 3 * width/3;
  botcar.y = height/2;

//Cop Car Spawn
  cop.y = height/1.35;

//User Car Speed
  user.vx = random(user.speedmin,user.speed);

//Bot Car Speed
  botcar.vx = random(botcar.speedmin,-botcar.speed);
  botcar.vy = random(-botcar.speed,botcar.speed);

//Cop Car Speed
  cop.vx = random(cop.speedmin,cop.speed);
  cop.vy = random(-cop.speed,cop.speed);
}

function draw() {
  bgset();

  if (state === 'title') {
    titleScreen();
  }
  else if (state === 'simulation'){
    simulation();
  }
  else if (state === 'safe') {
    safeScreen();
  }
  else if (state === 'crash') {
    crashScreen();
  }
  else if (state === 'caught') {
    caughtScreen();
  }
}


//DISPLAY BACKGROUND
function bgset() {
  imageMode(CENTER);
  image(background.image,bg.x,bg.y,bg.w,bg.h);
}

//Title
function titleScreen() {

  imageMode(CENTER);
  image(title.image,title.x,title.y,title.w,title.h);
}

//CALLING THE SIMULATION
function simulation() {
  movement();
  checkOffscreen();
  checkOverlap();
  checkCopoverlap();
  checkSpeed();
  display();
}

//SAFE SCREEN
function safeScreen() {
  imageMode(CENTER);
  image(safe.image,safe.x,safe.y,safe.w,safe.h);
}

//CRASH SCREEN
function crashScreen() {
  imageMode(CENTER);
  image(crash.image,crash.x,crash.y,crash.w,crash.h);
}

//CAUGHT
function caughtScreen() {
  imageMode(CENTER);
  image(caught.image,caught.x,caught.y,caught.w,caught.h);
}

//New Function Checks the speed of the user car
function checkSpeed(){
//IF SPEED IS GREATER THAN 15 SPAWN THE COP CAR
  if(user.vx > 15) {
    imageMode(CENTER);
    image(cop.image,cop.x,cop.y,cop.w,cop.h);
  }
}

//DISPLAY USER CAR
function display() {
//User Car
  imageMode(CENTER);
  image(user.image,user.x,user.y,user.w,user.h);

//Bot Car
  imageMode(CENTER);
  image(botcar.image,botcar.x,botcar.y,botcar.w,botcar.h);
}

function movement() {
//LIMIT
  let xc = constrain(user.x,0,870);
  let yc = constrain(user.y,280,800);

//USER CAR MOVEMENT
  if (keyIsDown(RIGHT_ARROW)) {
    user.x = xc + user.vx;
  }
  else if (keyIsDown(UP_ARROW)) {
    user.y = yc + user.vy;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    user.y = yc + user.vy2;
  }

//LIMIT Bot Car Y positioning
  let yc2 = constrain(botcar.y,280,720);
//Bot Car Movement
  botcar.x = botcar.x + botcar.vx;
  botcar.y = yc2 + botcar.vy;

  let yc3 = constrain(cop.y,280,720);
//COP CAR MOVEMENT
  cop.x = cop.x + cop.vx;
  cop.y = yc3 + cop.vy;
}

function checkOffscreen() {
//If the user car goes off the right side... YOU MAKE IT HOME SAFE!
  if (user.x > 860) {
    state ='safe';
  }
}

function checkOverlap() {
//If the user car and the bot car overlap... YOU'VE BEEN IN A CRASH!
  let d = dist(user.x,user.y,botcar.x,botcar.y);
  if (d < user.w/3 + botcar.w/3) {
    state ='crash';
  }
}

function checkCopoverlap() {
//If the user and cop overlap... YOU'VE BEEN CAUGHT!
let d = dist(user.x,user.y,cop.x,cop.y);
if (d < user.w/5 + cop.w/5) {
  state ='caught';
  }
}

function mousePressed() {
  //Press the mouse to start the simulation
  if (state === 'title') {
    state ='simulation';
  }
}
