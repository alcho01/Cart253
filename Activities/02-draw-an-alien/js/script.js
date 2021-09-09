/**
Creating An Alien
Alex Cho

*/

//Creating The Canvas
  function setup() {
  createCanvas(640, 480);

//Set the background to
  background(0 ,0 ,153);
  noStroke();

//Making The Body
  fill(64);
  ellipse(320, 480, 300, 200);

//Making The Head
  fill(64);
  ellipse(320, 240, 250, 400);

//Making The Eyes
  fill(0);
  ellipse(250, 240, 80, 250);
  ellipse(390, 240, 80, 250);

//Making White in Eyes
  fill(255);
  ellipse(230, 220, 30, 50);
  ellipse(370, 220, 30, 50);

//Making The Nose
  fill(0);
  ellipse(300, 350, 10, 10);
  ellipse(340, 350, 10, 10);

//Making The Mouth
  stroke(200, 0, 0);
  strokeWeight(10);
  rectMode(CENTER);
  rect(320, 390, 70, 20);
}


/**
Description of draw()
*/
function draw() {

}
