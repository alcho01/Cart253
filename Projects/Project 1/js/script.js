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


let mountain = {
  x: -50,
  y: 900,
  x2: 300,
  y2: 900,
  x3: 0,
  y3: 300,
  fill:{
    r: 156,
    g: 156,
    b: 156
  }
};

let mountain2 = {
  x: 650,
  y: 900,
  x2: 300,
  y2: 900,
  x3: 600,
  y3: 300,
};

let mountain3 = {
  x: -20,
  y: 900,
  x2: 400,
  y2: 900,
  x3: 200,
  y3: 300,
  fill:{
    r: 107,
    g: 107,
    b: 107
  }
};

let mountain4 = {
  x: 200,
  y: 900,
  x2: 620,
  y2: 900,
  x3: 400,
  y3: 300,
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
  mountains();
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

//Making Left mountain
function mountains(){
  fill(mountain.fill.r,mountain.fill.g,mountain.fill.b);
  triangle(mountain.x,mountain.y,mountain.x2,mountain.y2,mountain.x3,mountain.y3);

//Making Right mountain
  fill(mountain.fill.r,mountain.fill.g,mountain.fill.b);
  triangle(mountain2.x,mountain2.y,mountain2.x2,mountain2.y2,mountain2.x3,mountain2.y3);

//Making Middle Left mountain
  fill(mountain3.fill.r,mountain3.fill.g,mountain3.fill.b);
  triangle(mountain3.x,mountain3.y,mountain3.x2,mountain2.y2,mountain3.x3,mountain3.y3);

//Making Middle Right mountain
  fill(mountain3.fill.r,mountain3.fill.g,mountain3.fill.b);
  triangle(mountain4.x,mountain4.y,mountain4.x2,mountain4.y2,mountain4.x3,mountain4.y3);

}
