/**
Title of Project
Alex Cho

At Least 2 Moving Elements
Interactivity
Aesthetic?
TitleScreen
EndScreen

Idea:
*/

//Choosing The Background Color
let bg = {
  r: 137,
  g: 178,
  b: 245
};

let santaface = {
  x: 300,
  y: 400,
  w: 80,
  h: 80,
  start: 0,
  growth:5,
  fill:{
    r: 237,
    g: 205,
    b: 178
  }
};

let santahat = {
  x: 300,
  y: 400,
  size: 80,
  growth:5,
  fill:{
    r: 217,
    g: 26,
    b: 4
  }
};

let santahat2 = {
  x:300,
  y: 405,
  w: 80,
  h: 20,
  growth: 5,
  fill:{
    r: 255,
    g: 255,
    b: 255
  }
};

/**
Description of setup
*/
function setup() {
  createCanvas(600,800);
  noStroke();
}


/**
Description of draw()
*/
function draw() {
  backgrd();
  santa();
}

//Making The Background
function backgrd() {
  background(bg.r, bg.g, bg.b);
  bg.b = map(mouseY, 0, 600, 255, 230); //Lighter To Darker Blue
}

//Making Santa
function santa() {

//Boundaries
  let xc = constrain(mouseX,0,width);
  let xy = constrain(mouseY,0,height);

//Making Santa's Hat
  fill(santahat.fill.r,santahat.fill.g,santahat.fill.b);
  ellipse(xc,xy,santahat.size);


//Making Santa's Face
  fill(santaface.fill.r,santaface.fill.g,santaface.fill.b);
  arc(xc,xy,santaface.w,santaface.h,santaface.start,PI);



//Making Santa's Hat Edge
  fill(santahat2.fill.r,santahat2.fill.g,santahat2.fill.b);
  ellipse(xc,xy,santahat2.w,santahat2.h);



}
