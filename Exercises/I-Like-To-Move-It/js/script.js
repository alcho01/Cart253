/**
I Like To Move It
Alex Cho

Include three shapes [Done]
Include movement [Done]
Include size changes [Done]
Include color changes [Done]
Use map() and constrain() [Done]
Respond to the mouse position using mouseX and mouseY [Done]
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
  y: 500,
  size: 200,
  growth: 0.2,
  speed: 1,
  brightness: 120,
  alpha: 100
};

let circle2 = {
  x: 1000,
  y: 500,
  size: 150,
  sizeRatio: 0.8,
  speed: -2,
  brightness: 5,
  alpha: 100
};

let circle3 = {
  x: 500,
  y: 1000,
  size: 100,
  sizeRatio: 0.8,
  speed: -1,
  brightness: 240,
  alpha: 100
};

let circle4 = {
  x: 500,
  y: 1,
  size: 50,
  sizeRatio: 0.8,
  speed: 2,
  brightness: 40,
  alpha: 100
};

let circle5 = {
  x:500,
  y:500,
  w:800,
  h:50,
  brightness:120,
  alpha:130
};

let circle6 = {
  x:500,
  y:500,
  w:50,
  h:800,
  brightness:120,
  alpha:130
};
let rectangle = {
  x:500,
  y:500,
  size:200,
  angle: 0
}

//Creating The Canvas
function setup() {
  createCanvas(1000,1000);


}

//Where Functions are being Called
function draw() {
  bground();
  circles();
  squares();
  rectangles();
}

//Background Color
function bground() {

//Background Color becomes brighter
  background(bg.r, bg.g, bg.b);
  bg.r = map(circle2.size,150,width,0,255);
  bg.g = map(circle4.speed,100,height,0,255);
  bg.b = map(circle5.size,200,width,100,255);
}

//Circle 1
function circles() {
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + circle1.growth;
  circle1.size = constrain(circle1.size,0,width);
  stroke(0);
  fill(mouseX,mouseY,circle1.brightness,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

//Circle 2
  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * circle2.sizeRatio;
  fill(mouseX,mouseY,circle2.brightness,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);

//Circle 3
  circle3.y = circle3.y + circle3.speed;
  circle3.y = constrain(circle3.y,height/2,height);
  circle3.size = circle2.size * circle3.sizeRatio;
  fill(mouseX,mouseY,circle3.brightness,circle3.alpha);
  ellipse(circle3.x,circle3.y,circle3.size);

//Circle 4
  circle4.y = circle4.y + circle4.speed;
  circle4.y = constrain(circle4.y,0,height/2);
  circle4.size = circle3.size * circle4.sizeRatio;
  fill(mouseX,mouseY,circle4.brightness,circle4.alpha);
  ellipse(circle4.x,circle4.y,circle4.size);

//Circle 5
  circle5.h = (mouseY);
  stroke(0);
  fill(mouseX,mouseY,circle5.brightness,circle5.alpha);
  ellipse(circle5.x,circle5.y,circle5.w,circle5.h);

//Circle 6
  circle6.w = (mouseX);
  stroke(0);
  fill(mouseX,mouseY,circle6.brightness,circle6.alpha);
  ellipse(circle6.x,circle6.y,circle6.w,circle6.h);
}

function rectangles() {
  stroke(0);
  rectMode(CENTER);
  translate(rectangle.x, rectangle.y);
  rotate(rectangle.angle);
  rect(0,0, rectangle.size,rectangle.size);

  rectangle.angle += 0.1;
}

//squares
function squares() {
  var light = {
  x: random(width),
  y: random(height),
  size: (mouseX,mouseY)
    }
 square(mouseX,mouseY);
 square(light.x,light.y,light.size);
 light.x = constrain(light.x,0,width/2);
}
