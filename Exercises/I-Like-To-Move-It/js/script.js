/**
I Like To Move It
Alex Cho

Include three shapes
Include movement
Include size changes
Include color changes
Use map() and constrain()
Respond to the mouse position using mouseX and mouseY
***********************/

//Defining Color For Background
let bg = {
  r: 43,
  g: 87,
  b: 120
};

//Setting Up Circle Settings
let circle1 = {
  x: 0,
  y: 250,
  size: 200,
  brightness: 120,
  alpha: 200
};

let circle2 = {
  x: 500,
  y: 250,
  size: 150,
  brightness: 5,
  alpha: 200
};

let circle3 = {
  x: 250,
  y: 500,
  size: 100,
  brightness: 240,
  alpha: 200
};

let circle4 = {
  x: 250,
  y: 1,
  size: 50,
  brightness: 40,
  alpha: 200
};

//Creating The Canvas
function setup() {
  createCanvas(500,500);
  noStroke();
}

//Where Functions are being Called
function draw() {
  bground();
  circles();
}

//Background Color
function bground() {

  background(bg.r, bg.g, bg.b);
}

//Circle 1
function circles() {

  fill(mouseX,mouseY,circle1.brightness,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

//Circle 2
  fill(mouseX,mouseY,circle2.brightness,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);

//Circle 3
  fill(mouseX,mouseY,circle3.brightness,circle3.alpha);
  ellipse(circle3.x,circle3.y,circle3.size);

//Circle 4
  fill(mouseX,mouseY,circle4.brightness,circle4.alpha);
  ellipse(circle4.x,circle4.y,circle4.size);

}
