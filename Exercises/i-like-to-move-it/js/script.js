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
  growth:0.2,
  speed:1,
  brightness:120,
  alpha:200
};
let circle2 = {
  x:500,
  y:250,
  size:150,
  sizeRatio:0.8,
  speed:-1,
  brightness:5,
  alpha:200
};
let circle3 = {
  x:250,
  y:500,
  size:100,
  sizeRatio:0.8,
  speed:-1,
  brightness:240,
  alpha:200
};
let circle4 = {
  x:250,
  y:1,
  size:50,
  sizeRatio:0.8,
  speed:1,
  brightness:40,
  alpha:200
};

//Setup
function setup() {
  createCanvas(500,500);
  noStroke();
}

//Functions
function draw() {
  circles();
  lights();

//Background
function circles() {
  background(bg.r,bg.g,bg.b);
  bg.r = map(circle2.size,150,width,0,255);
  bg.g = map(circle3.speed,100,height,0,255);
  bg.b = map(circle1.size,200,width,100,255);

//Circle1
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + circle1.growth;
  circle1.size = constrain(circle1.size,0,width);
  fill(mouseX,mouseY,circle1.brightness,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

//circle2
  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * circle2.sizeRatio;
  fill(mouseX,mouseY,circle2.brightness,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);


//Circle3
  circle3.y = circle3.y + circle3.speed;
  circle3.y = constrain(circle3.y,height/2,height);
  circle3.size = circle2.size * circle3.sizeRatio;
  fill(mouseX,mouseY,circle3.brightness,circle3.alpha);
  ellipse(circle3.x,circle3.y,circle3.size);

//Circle4
  circle4.y = circle4.y + circle4.speed;
  circle4.y = constrain(circle4.y,0,height/2);
  circle4.size = circle3.size * circle4.sizeRatio;
  fill(mouseX,mouseY,circle4.brightness,circle4.alpha);
  ellipse(circle4.x,circle4.y,circle4.size);
}

//lights
function lights() {
  var lights = {
  x: random(width),   //Reminder: Random has to be defined
  y: random(height),
  size: (mouseX,mouseY)
}
 ellipse(mouseX,mouseY);
 ellipse(lights.x,lights.y,lights.size);
 lights.x = constrain(lights.x,0,width/2);

}
}
