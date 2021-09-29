/**
Love-Actually
Alex Cho

GUIDELINES
Allow the user to control one of the circles [DONE]
Make the non-user circle move differently [DONE]
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

let user = {
  x: undefined,
  y: undefined,
  w: 150,
  h: 150,
  vx: -6,
  vx2: 6,
  vy: -6,
  vy2: 6,
  image: undefined
};

let botcar = {
  x: undefined,
  y: 400,
  w: 150,
  h: 150,
  vx: 0,
  vy: 0,
  speed: 5,
  speedmin: -5,
  image: undefined
};

let state = 'title'

function preload() {
  background.image = loadImage('assets/images/background.png');
  user.image = loadImage('assets/images/usercar.png');
  botcar.image = loadImage('assets/images/aicar.png');
  title.image = loadImage('assets/images/title.png');
  safe.image = loadImage('assets/images/safe.png');
  crash.image = loadImage('assets/images/crash.png');
}

function setup() {
//Setting Up the Canvas
  createCanvas(800,800);

//User Car Spawn
  user.x = width/30;
  user.y = height/2;

//Bot Car Spawn
  botcar.x = 3 * width/3;
  botcar.y = height/2;

  botcar.vx = random(botcar.speedmin,-botcar.speed);
  botcar.vy = random(-botcar.speed,botcar.speed);
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
  //else if (state === '') {

  //}
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

function simulation() {
  movement();
  checkOffscreen();
  checkOverlap();
  display();
}

function safeScreen() {
  imageMode(CENTER);
  image(safe.image,safe.x,safe.y,safe.w,safe.h);
}

function crashScreen() {
  imageMode(CENTER);
  image(crash.image,crash.x,crash.y,crash.w,crash.h);
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
    user.x = xc + user.vx2;
  }
  else if (keyIsDown(UP_ARROW)) {
    user.y = yc + user.vy;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    user.y = yc + user.vy2;
  }

//Bot Car Movement
  let yc2 = constrain(botcar.y,280,720);

  botcar.x = botcar.x + botcar.vx;
  botcar.y = yc2 + botcar.vy;
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
  if (d < user.w/2 + botcar.w/2) {
    state ='crash';
  }
}

function mousePressed() {
  if (state === 'title') {
    state ='simulation';
  }
}
