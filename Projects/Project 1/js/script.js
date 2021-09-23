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
  size: 50,
  growth:5,
  fill:{
    r:237,
    g:205,
    b:178
  }
};
let santalow = {
  x: 200,
  y: 200,
  w: 80,
  h: 80,
  start: 0,
  stop: PI
}

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


function backgrd() {
  background(bg.r, bg.g, bg.b);
  bg.b = map(mouseY, 0, 600, 255, 230); //Lighter To Darker Blue

}

function santa() {


}


}
