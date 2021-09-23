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
let santaup = {
  x: 300,
  y: 400,
  size: 80,
  growth:5,
  fill:{
    r: 237,
    g: 205,
    b: 178
  }
};
let santalow = {
  x: 300,
  y: 400,
  w: 80,
  h: 80,
  start: 0,
  growth:5,
  fill:{
    r: 214,
    g: 25,
    b: 0
  }
};
let santabeard = {
  x:300,
  y: 405,
  w: 82,
  h: 40,
  growth: 5,
  fill:{
    r: 255,
    g: 255,
    b: 255
  }
};
let santahat = {
  //HAT
  x: 260,
  y: 370,
  x2: 300,
  y2: 300,
  x3: 340,
  y3: 370,
  growth: 5,
  fill:{
    r: 214,
    g: 25,
    b: 0,
},
//POM POM
  xp: 300,
  yp: 295,
  size: 20,
  growthp: 5,
  fill2:{
    r2:255,
    g2:255,
    b2:255
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

//Making Santa's Head/Body
  fill(santaup.fill.r,santaup.fill.g,santaup.fill.b);
  ellipse(santaup.x,santaup.y,santaup.size);

//Making Santa's Coat
  fill(santalow.fill.r,santalow.fill.g,santalow.fill.b);
  arc(santalow.x,santalow.y,santalow.w,santalow.h,santalow.start,PI);

//Making Santa's Beard
  fill(santabeard.fill.r,santabeard.fill.g,santabeard.fill.b);
  ellipse(santabeard.x,santabeard.y,santabeard.w,santabeard.h);

//Making Santa's Hat
  fill(santahat.fill.r,santahat.fill.g,santahat.fill.b);
  triangle(santahat.x,santahat.y,santahat.x2,santahat.y2,santahat.x3,santahat.y3);
//Making Santa's Hat PomPom
  fill(santahat.fill2.r2,santahat.fill2.g2,santahat.fill2.b2);
  ellipse(santahat.xp,santahat.yp,santahat.size);
}