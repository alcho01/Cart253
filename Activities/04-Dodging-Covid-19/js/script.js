/**
Dodging Covid-19
Alex Cho

Familiarizing with Conditionals
*/

"use strict";


let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};
let user = {
  x: 200,
  y: 200,
  size: 100,
  fill: 255
};

//Creating The Canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

//Setting up the height and speed
  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

}


//Background
function draw() {
  background(17,20,94);

//Covidd19 Movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0,height);
  }

//User Movement
  user.x = mouseX;
  user.y = mouseY;

//Filling Color for Covid19
  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  noStroke();

//Creating The Covid19 Shape
  ellipse(covid19.x,covid19.y,covid19.size);

//The user
fill(user.fill);
ellipse(user.x,user.y,user.size);





}
