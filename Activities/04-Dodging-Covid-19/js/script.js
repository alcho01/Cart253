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

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  covid19.y = random(0,height);
  covid19.vx = covid19.speed;


}


/**
Description of draw()
*/
function draw() {

}
