/**
Love-Actually
Alex Cho

GUIDELINES
Allow the user to control one of the circles [DONE]
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

};

let user = {
  x: undefined,
  y: undefined,
  w: 150,
  h: 150,
  vx: -5,
  vx2: 5,
  vy: -5,
  vy2: 5,
  image: undefined
};

let botcar = {
  x: undefined,
  y: 400,
  w: 150,
  h: 150,
  vx: 0,
  vy: 0,
  speed: 6,
  speedmin: -6,
  image: undefined
};

function preload() {
  background.image = loadImage('assets/images/background.png');
  user.image = loadImage('assets/images/usercar.png');
  botcar.image = loadImage('assets/images/aicar.png');
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
  display();
  movement();
}

//DISPLAY BACKGROUND
function bgset() {
  imageMode(CENTER);
  image(background.image,bg.x,bg.y,bg.w,bg.h);
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
let xc = constrain(user.x,0,width);
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
let yc2 = constrain(botcar.y,280,height);

botcar.x = botcar.x + botcar.vx;
botcar.y = yc2 + botcar.vy;

}
