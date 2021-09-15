/**
Creating An Alien
Alex Cho

*/

//Creating The Canvas
  function setup() {
  createCanvas(640, 480);

//Set the background to
  background(13, 116, 157);
  noStroke();

//UFO Light
    fill(249, 208, 65);
    rect(495,100,70,430);

//UFO
  fill(217, 222, 221);
  ellipse(530,100,250,40);
  ellipse(530,90,160,40);

//Making The Body
  fill(49, 185, 132);
  ellipse(320, 500, 300, 200);

//Making The Neck
  fill(60, 185, 132);
  rect(320,520,60,60);

//Making The Head
  fill(49, 185, 132);
  ellipse(320, 150, 200, 200);
  ellipse(320,200,250,230);
  ellipse(320,250,200,200);
  ellipse(320,300,150,170);


//Making The Eyes
  fill(0);
  ellipse(250, 190, 100, 80);
  ellipse(390, 190, 100, 80);

//Making White in Eyes
  fill(255);
  ellipse(210, 190, 10, 20);
  ellipse(270, 190, 30, 40);
  ellipse(370, 190, 30, 40);
  ellipse(430, 190, 10, 20);

//Making The Nose
  fill(0);
  ellipse(310, 240, 10, 40);
  ellipse(330, 240, 10, 40);

//Making The Mouth
  rectMode(CENTER);
  rect(320, 320, 90, 5);

//Making The Neck
  fill(49, 185, 132);
  rect(320, 400, 20, 50);

//Making The Hand
  fill(49, 185, 132);
  ellipse(150,480,80,40);
  ellipse(100,480,50,340);
  ellipse(100,320,50,30);
  ellipse(78,305,10,40);
  ellipse(90,305,10,50);
  ellipse(102,305,10,50);
  ellipse(114,305,10,50);
  ellipse(124,315,10,20);

}


/**
Description of draw()
*/
function draw() {

}
