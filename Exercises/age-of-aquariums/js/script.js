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

//ARRAY FOR FISH
let school = [];

//AMOUNT OF FISH
let schoolSize = 15;

//NAME FOR IMAGE
let fishy;

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
  fishy = loadImage('assets/images/fish1.png');

}

function setup() {
  createCanvas(800,600);

//User positioning
  user.x = width/2;
  user.y = height/2;

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0,width), random(0,height), random(0,5)); //CREATE FISH SETTINGS
  }
}

function createFish(x,y,speed) {
  let fish = {
    x: x,
    y: y,
    w: 30,
    h: 30,
    vx: 0,
    vy: 0,
    speed: speed
  };
  return fish;
}

function draw() {
  bgSet();

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }

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
  push();
  imageMode(CENTER,CENTER);
  image(user.image,user.x,user.y,user.w,user.h);
  pop();
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

function moveFish(fish) {
//FISH MOVEMENT
  let change = random(0.7);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  fish.x = constrain(fish.x,0,width);
  fish.y = constrain(fish.y,0,height);
}

function displayFish(fish) {
//DISPLAY THE FISH
  push();
  imageMode(CENTER);
  image(fishy,fish.x,fish.y,fish.w,fish.h);
  pop();
}
