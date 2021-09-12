/**
I Like To Move It
Alex Cho

*/

//Shape Variables
let bg = {
  r:20,
  g:20,
  b:20
};
let circle1 = {
  x:0,
  y:250,
  size:200,
  speed:1,
  brightness:120,
  alpha:200
};
let circle2 = {
  x:500,
  y:250,
  size:150,
  speed:-1,
  brightness:5,
  alpha:200
};
let circle3 = {
  x:250,
  y:500,
  size:100,
  speed:-1,
  brightness:240,
  alpha:200
};

//Setuo
function setup() {
  createCanvas(500,500);
  noStroke();
}

//Background
function draw() {
  background(bg.r,bg.g,bg.b);
  bg.b = bg.b + 1; //change after


//Circle1
  circle1.x = circle1.x + circle1.speed;
  fill(mouseX,mouseY,circle1.brightness,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

//circle2
  circle2.x = circle2.x + circle2.speed;
  fill(mouseX,mouseY,circle2.brightness,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);


//Circle3
  circle3.y = circle3.y + circle3.speed;
  fill(mouseX,mouseY,circle3.brightness,circle3.alpha);
  ellipse(circle3.x,circle3.y,circle3.size);

}
