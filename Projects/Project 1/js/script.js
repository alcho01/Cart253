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
}

/**
Description of setup
*/
function setup() {
  createCanvas(600,800);

}


/**
Description of draw()
*/
function draw() {
  background(bg.r, bg.g, bg.b);
  bg.b = map(mouseY, 0, 600, 255, 230); //Lighter To Darker Blue
}
