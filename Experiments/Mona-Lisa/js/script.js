/**
Mona Lisa
Alex Cho

Reproducing the Mona Lisa.
*/

"use strict";




/**
Description of setup
*/
function setup() {
  createCanvas(400, 600);

//setting the background
  background(144,209,152);
  noStroke();

//Draw the Hair
  fill(50,10,10);
  ellipse(210,180,180,240);

//Drawing the Face
  fill(219,195,114);
  ellipse(200,150,110,160);

//Drawing the Mouth
noFill();
stroke(0);
strokeWeight(3);
arc(200,50,280,280,5.5 *PI/4 + TWO_PI + PI, 6.5*PI/4 + PI, OPEN);
}


/**
Description of draw()
*/
function draw() {

}
