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

let user = {
  lives: 3,
  livelost: -1,
  x: undefined,
  y: undefined,
  w: 100,
  h: 100,
  vx: - 5,
  vx2: 5,
  vy: - 5,
  vy2: 5,
  image: undefined
};

//ARRAY FOR FISH
let school = [];
//AMOUNT OF FISH
let schoolSize = 15;
//NAME FOR IMAGE
let fishImg;

//ARRAY FOR CRABS
let consortium = [];
//AMOUNT OF CRABS
let consortiumSize = 5;
//NAME FOR IMAGE
let crabImg;

let hp = {
  x: 80,
  y: 550,
  w: 150,
  h: 100,
  image: undefined,
  image2: undefined,
  image3: undefined
  };


//Background
let bg = {
  x: 400,
  y: 300,
  w: 800,
  h: 600,
  image: undefined,
}

function preload() {
  bg.image = loadImage('assets/images/background.png');
  user.image = loadImage('assets/images/user.png');

//Healthbar Images
  hp.image = loadImage('assets/images/health-full.png');
  hp.image2 = loadImage('assets/images/health-twothird.png');
  hp.image3 = loadImage('assets/images/health-third.png');

//IN ARRAYS
  fishImg = loadImage('assets/images/fish1.png');
  crabImg = loadImage('assets/images/crab.png');

}

function setup() {
  createCanvas(800,600);

//User positioning
  user.x = width/2;
  user.y = height/2;

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0,width), random(0,height),30, random(0,5)); //CREATE FISH SETTINGS
  }

  for (let i = 0; i < consortiumSize; i++) {
  consortium[i] = createCrab(random(0,width), random(0,height), random(0,7)); //CREATE CRAB SETTINGS
  }
}


function createFish(x,y,w,speed) {
  let fish = {
    x: x,
    y: y,
    w: w,
    h: 30,
    vx: 0,
    vy: 0,
    speed: speed,
  };
  return fish;
}

function createCrab(x,y,speed) {
  let crab = {
    x: x,
    y: y,
    w: 50,
    h: 50,
    vx: 0,
    vy: 0,
    speed: speed
  };
  return crab;
}

function draw() {
  bgSet();

//Fish
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
    eatFish(school[i]);
    }

//Crabs
  for (let i = 0; i < consortium.length; i++) {
    moveCrab(consortium[i]);
    displayCrab(consortium[i]);
    crabbed(consortium[i]);
  }

//User Settings
  userReqs();
  hpBar();

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
  imageMode(CENTER);
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
  image(fishImg,fish.x,fish.y,fish.w,fish.h);
  pop();
}

function eatFish(fish) {
//IF FISH INTERACTS WITH USER IT GETS EATEN
  for (let i = 0; i < school.length; i++) {
    let fish = school[i];
    let d = dist(user.x,user.y,fish.x,fish.y);
    if (d < user.w / 2 + fish.w / 2) {
      school.splice(i,1);
      break;
      }
    }
  }

function moveCrab(crab) {
//FISH MOVEMENT
  let change = random(0.7);
  if (change < 0.05) {
    crab.vx = random(-crab.speed, crab.speed);
    crab.vy = random(-crab.speed, crab.speed);
  }

  crab.x = crab.x + crab.vx;
  crab.y = crab.y + crab.vy;

  crab.x = constrain(crab.x,0,width);
  crab.y = constrain(crab.y,0,height);
}

function displayCrab(crab) {
//DISPLAY THE Crab
  push();
  imageMode(CENTER);
  image(crabImg,crab.x,crab.y,crab.w,crab.h);
  pop();
}

function crabbed(crab) {
//IF CRAB INTERACTS WITH USER, USER LOSES A LIVE AND THE CRAB SPAWNS AT A RANDOM LOCATION
  for (let i = 0; i < consortium.length; i++) {
  let crab = consortium[i];
  let d = dist(user.x,user.y,crab.x,crab.y);
  if (d < user.w / 2 + crab.w / 2){
    user.lives = user.lives + user.livelost;
    crab.x = random(0,width);
    crab.y = random(0,height);
    break;
    }
  }
}

function hpBar() {
  if (user.lives === 3){
    push();
    imageMode(CENTER);
    image(hp.image,hp.x,hp.y,hp.w,hp.h);
    pop();
  }
  else if (user.lives === 2) {
    push();
    imageMode(CENTER);
    image(hp.image2,hp.x,hp.y,hp.w,hp.h);
    pop();
  }
  else if (user.lives === 1) {
    push();
    imageMode(CENTER);
    image(hp.image3,hp.x,hp.y,hp.w,hp.h);
    pop();
  }
}
