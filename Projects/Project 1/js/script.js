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
  r: 89,
  g: 127,
  b: 189,
  fill:{
  r2: 122,
  g2: 165,
  b2: 235
  }
};

// USER STUFF \\

let hiker = {
  x: 300,
  y: 320,
  w: 150,
  h: 150,
  vx: -4,
  vx2: 4,
  vy: -2,
  vy2: 2,
  image: undefined,
  fill:{
    r: 237,
    g: 205,
    b: 178
  }
};

//Cloud1
let cloud = {
  x: 0,
  y: 50,
  w: 250,
  h: 50,
  speed: 1,
  vx: 3,
  vy: 0,
  fill:{
    r: 255,
    g: 255,
    b: 255,
    a: 200
  }
};

//Cloud2
let cloud2 = {
  x: 0,
  y: 10,
  w: 350,
  h: 70,
  speed: 1,
  vx: 1,
  vy: 0,
  fill:{
    r: 255,
    g: 255,
    b: 255,
    a: 200
  }
};

//Sun
let sun = {
  x:300,
  y:800,
  size:100,
  vy:-2,
  fill:{
    r: 230,
    g: 170,
    b: 7,
    a: 150
  }
};

//Lake
let lake = {
  x: 0,
  y: 0,
  fill:{
    r: 0,
    g: 93,
    b: 150,
    a:200,
  },
  fill2:{
    r2: 13,
    g2: 118,
    b2: 184,
    a2: 200
  }
};

let bridge1 = {
  x: 0,
  y: 380,
  w: 800,
  h: 30,
  fill: {
    r: 99,
    g: 45,
    b: 41
  }
};

function preload(){
  hiker.image = loadImage('assets/images/hiker.png');
  mySound = loadSound('assets/sounds/waves.wav');
  mySound2 = loadSound('assets/sounds/birds.wav');
}
//Setting up what needs to be done beforehand
function setup() {
//Waves Sound FX
  mySound.setVolume(0.03);
  mySound.play();
  mySound.loop();
//Birds Sound FX
  mySound2.setVolume(0.07);
  mySound2.play();
  mySound2.loop();

  createCanvas(600,800);
  noStroke();

//cloud1 positioning
  cloud.y = random(0,300);
//cloud2 positioning
  cloud2.y = random(0,330);
}

//Calling the Functions
function draw() {
  backgrd();
  sunny();
  lakes();
  bridge();
  user();
  clouds();
  trees();
  mountains();

}

//Making The Background
function backgrd() {

  background(bg.r, bg.g, bg.b);
  //bg.b = map(mouseY, 0, 200, 255, 230); //Lighter To Darker Blue
}

//Making hiker
function user() {

//Boundaries
  let xc = constrain(hiker.x,0,width);
  let yc = constrain(hiker.y,320,330);

//Hiker Movement
if (keyIsDown(LEFT_ARROW)) {
  hiker.x = xc + hiker.vx;
}
else if (keyIsDown(RIGHT_ARROW)) {
  hiker.x = xc + hiker.vx2;
}
else if (keyIsDown(UP_ARROW)) {
  hiker.y = yc + hiker.vy;
}
else if (keyIsDown(DOWN_ARROW)) {
  hiker.y = yc + hiker.vy2;
}

//Making Hiker
imageMode(CENTER);
image(hiker.image,hiker.x,hiker.y,hiker.w,hiker.h);
}

//Making The Mountains
function mountains(){

  //Mountains
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


  //Making Left mountain
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

//Making The Trees
function trees(){

  //left tree
  let tree = {
    x: 15,
    y: 600,
    x2: 200,
    y2: 600,
    x3: 100,
    y3: 400,
    fill:{
      r: 15,
      g: 92,
      b: 1,
    }
  };

  //middle tree
  let tree2 = {
    x: 240,
    y: 600,
    x2: 380,
    y2: 600,
    x3: 290,
    y3: 350,
    fill:{
      r: 15,
      g: 92,
      b: 1
    }
  };

  //right tree
  let tree3 = {
    x: 380,
    y: 600,
    x2: 600,
    y2: 600,
    x3: 500,
    y3: 400,
    fill:{
      r: 15,
      g: 92,
      b: 1
    }
  };

//Left Tree
  fill(tree.fill.r,tree.fill.g,tree.fill.b);
  triangle(tree.x,tree.y,tree.x2,tree.y2,tree.x3,tree.y3);

//Middle Tree
  fill(tree2.fill.r,tree2.fill.g,tree2.fill.b);
  triangle(tree2.x,tree2.y,tree2.x2,tree2.y2,tree2.x3,tree2.y3);

//Right Tree
  fill(tree3.fill.r,tree3.fill.g,tree3.fill.b);
  triangle(tree3.x,tree3.y,tree3.x2,tree3.y2,tree3.x3,tree3.y3);
}

//The code for the lake was used from an older project I did in Dawson(I changed the variables and cleaned it up)

//Making The Lake
function lakes(){

  fill(lake.fill.r,lake.fill.g,lake.fill.b,lake.fill.a);
  //lake.fill.b = map(mouseY, 0,500,255,200); //From Dark To Light

//Sun Affecting Lake
    if (sun.y < 330) {
      fill(lake.fill2.r2,lake.fill2.g2,lake.fill2.b2);
    }

//Shape/Depth/Movement of Wave
  beginShape();
  for (let x = 0; x < width; x += 5) { //intensity of the wave (higher number makes it smoother)
    let y = map(noise(lake.x, lake.y), 0,1,620,200); //Height of the Waves + Vibration
    vertex(x,y);
    }

    lake.y += 0.0095;
  vertex(width, height); //Fills Page
  vertex(0,height); //Fills Page
  endShape(CLOSE); //Always have to Close shape to see it
  }

//Making The sun
function sunny(){

//Sun movement
  sun.y = sun.y + sun.vy;
  sun.y = constrain(sun.y,70,height);

//Sun Affecting background
  if (sun.y < 270) {
    background(bg.fill.r2, bg.fill.g2, bg.fill.b2);
  }

//Sun color and form
  fill(sun.fill.r,sun.fill.g,sun.fill.b,sun.fill.a);
  ellipse(sun.x,sun.y,sun.size);
}

//Making the clouds
function clouds(){

//Cloud1 Movement
  cloud.x = cloud.x + cloud.vx;
  cloud.y = cloud.y + cloud.vy;

  if (cloud.x > 800) {
    cloud.x = 0;
    cloud.y = random(0,300);
  }

//Cloud2 Movement

cloud2.x = cloud2.x + cloud2.vx;
cloud2.y = cloud2.y + cloud2.vy;

if (cloud2.x > 800) {
  cloud2.x = 0;
  cloud2.y = random(0,330);
}

//Change the speed of the clouds
  if (mouseIsPressed){

//Speed of cloud1
  cloud.x = cloud.x + cloud.vx + cloud.speed;

//Speed of clou2
  cloud2.x = cloud2.x + cloud2.vx + cloud2.speed;
  }

//Cloud1
  fill(cloud.fill.r,cloud.fill.g,cloud.fill.b,cloud.fill.a);
  ellipse(cloud.x,cloud.y,cloud.w,cloud.h);

//Cloud2
  fill(cloud2.fill.r,cloud2.fill.g,cloud2.fill.b,cloud.fill.a);
  ellipse(cloud2.x,cloud2.y,cloud2.w,cloud2.h);
}

//Making the bridge
function bridge(){

//The Bridge
  fill(bridge1.fill.r,bridge1.fill.g,bridge1.fill.b);
  rect(bridge1.x,bridge1.y,bridge1.w,bridge1.h);
}
