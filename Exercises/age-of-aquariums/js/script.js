/**
Age of aquariums
Alex Cho

Brief
User Controlled Shape[]
User has to interact with "fish"[]
Add more parameters(color,speed,size)[]
Add a new property to the "fish" to change the behaviour[]
Add two endings[]
*/

"use strict";

//Background
let bg = {
  x: 400,
  y: 300,
  w: 800,
  h: 600,
  image: undefined,
}

//USER
let user = {
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: - 5,
  vx2: 5,
  vy: - 5,
  vy2: 5,
  image: undefined
}

function preload() {
  bg.image = loadImage('assets/images/background.png');
  user.image = loadImage('assets/images/user.png');
}

function setup() {
  createCanvas(800,600);

//User positioning
  user.x = width/2;
  user.y = height/2;
}

function draw() {
  bgSet();
  userReqs();
}

function bgSet(){
//SET BACKGROUND
  imageMode(CENTER,CENTER);
  image(bg.image,bg.x,bg.y,bg.w,bg.h);
}

function userReqs() {
//USER Requirements
  displayUser();
  movementUser();
}

function displayUser() {
//DISPLAY THE USER
  imageMode(CENTER,CENTER);
  image(user.image,user.x,user.y,user.w,user.h);
}

function movementUser() {

//BOUNDARIES FOR THE USER
  let xc = constrain(user.x,0,width);
  let yc = constrain(user.y,0,height);

//Control User Movement
  if (keyIsDown(LEFT_ARROW)) {
    user.x = xc + user.vx;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    user.x = xc + user.vx2;
  }
  else if (keyIsDown(UP_ARROW)) {
    user.y = yc + user.vy;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    user.y = yc + user.vy2;
  }
}
