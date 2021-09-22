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

let bg = {
  r: 43,
  g: 87,
  b: 120
};


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  noStroke();
}


/**
Description of draw()
*/
function draw() {
  bground();

}

function bground(){
  background(bg.r, bg.g, bg.b);
}
