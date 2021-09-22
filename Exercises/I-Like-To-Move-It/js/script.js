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

}

//Background Color
function bground(){
  background(bg.r, bg.g, bg.b);
}
