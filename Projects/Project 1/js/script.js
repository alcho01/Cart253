/**
Title of Project
Alex Cho

At Least 2 Moving Elements[DONE]
Interactivity[DONE]
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
  b2: 235,
  }
};

//Hiker settings
let hiker = {
  lives: 3,
  livelost: -1,
  x: 300,
  y: 320,
  w: 150,
  h: 150,
  vx: -4,
  vx2: 4,
  vy: -2,
  vy2: 2,
  image: undefined,
};

//Healthbar settings //Probably could condense this code
let healthfull ={
  x: 5,
  y: 730,
  w: 120,
  h: 60,
  image: undefined
};

let healthtwothirds ={
  x: 5,
  y: 730,
  w: 120,
  h: 60,
  image: undefined
};

let healthonethird ={
  x: 5,
  y: 730,
  w: 120,
  h: 60,
  image: undefined
};

let healthnone ={
  x: 5,
  y: 730,
  w: 120,
  h: 60,
  image: undefined
};

//Rock Settings
let rock = {
  x: 0,
  y: 0,
  w: 80,
  h: 80,
  speed: 1,
  vy: 3,
  image: undefined
};

//Cloud1
let cloud = {
  x: 0,
  y: 50,
  w: 250,
  h: 50,
  speed: 20,
  vx: 3,
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
  speed: 15,
  vx: 1,
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

let playButton = {
  x: 290,
  y: 430,
  w: 100,
  h: 100,
  image: undefined
};

let title = {
  x: 300,
  y: 400,
  w: 600,
  h: 800,
  image: undefined
};

let end = {
  x: 300,
  y: 400,
  w: 600,
  h: 800,
  image: undefined
};

let state = 'title'

function preload(){

//Image assets
  hiker.image = loadImage('assets/images/hiker.png');
  rock.image = loadImage('assets/images/rock.png');

//HealthBar
  healthfull.image = loadImage('assets/images/healthfull.png');
  healthtwothirds.image = loadImage('assets/images/healthtwothirds.png');
  healthonethird.image = loadImage('assets/images/healthonethird.png');
  healthnone.image = loadImage('assets/images/healthnon.png');

//State Screens
  title.image = loadImage('assets/images/title.png');
  end.image = loadImage('assets/images/end.png');
  playButton.image = loadImage('assets/images/playbutton.png');

//Sounds
  mySound = loadSound('assets/sounds/waves.wav');
  mySound2 = loadSound('assets/sounds/birds.wav');
}

//Setting up what needs to be done beforehand
function setup() {

//Waves Sound FX
  mySound.setVolume(0.03); //SOMETIMES FOR THE SOUND YOU NEED TO RELOAD THE PAGE
  mySound.play();
  mySound.loop();

//Birds Sound FX
  mySound2.setVolume(0.07);
  mySound2.play();
  mySound2.loop();

//Canvas setup
  createCanvas(600,800);
  noStroke();

//cloud1 positioning
  cloud.y = random(0,300);
//cloud2 positioning
  cloud2.y = random(0,330);

//rock positioning
  rock.x = random(0,750);
}

//Calling the Functions
function draw() {
  displayBackground();

  if (state === 'title') {
    titleScreen();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'end') {
    endScreen();
  }
}

function titleScreen() {
  imageMode(CENTER);
  image(title.image,title.x,title.y,title.w,title.h);

  imageMode(CENTER);
  image(playButton.image,playButton.x,playButton.y,playButton.w,playButton.h);
  }

function endScreen() {
  imageMode(CENTER);
  image(end.image,end.x,end.y,end.w,end.h);
}

function simulation(){
  displaySun();
  displayLake();
  displayRock();
  displayBridge();
  displayHiker();
  displayClouds();
  displayTrees();
  displayMountains();
  healthBar();
  hit();
}

//Making The Background
function displayBackground(){

  background(bg.r, bg.g, bg.b);
}

//Making The sun
function displaySun(){

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

//Making The Lake
function displayLake(){

//Fill Lake
  fill(lake.fill.r,lake.fill.g,lake.fill.b,lake.fill.a);

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

//Making The Rock
function displayRock(){

//Rock Movement
  rock.y = rock.y + rock.vy;

//Spawns the rock back on top if it hits nothing and goes past y:700
  if (rock.y > 700) {
    rock.x = random(0,680);
    rock.y = 0;
  }
//Speed of Rock
  rock.y = rock.y + rock.vy;

//Defining The Rock
  imageMode(CENTER);
  image(rock.image,rock.x,rock.y,rock.w,rock.h);
}

//Making the bridge
function displayBridge(){

  let bridge = {
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

  //The Bridge
    fill(bridge.fill.r,bridge.fill.g,bridge.fill.b);
    rect(bridge.x,bridge.y,bridge.w,bridge.h);
  }

//Making hiker
function displayHiker(){

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

//Defining the Hiker
push();
imageMode(CENTER);
image(hiker.image,hiker.x,hiker.y,hiker.w,hiker.h);
pop();
}

//Making the healthbar
function healthBar() {
//If Hiker runs out of lives the game ends //HealthBar
  if (hiker.lives === 3){
    push();
    imageMode(CORNER);
    image(healthfull.image,healthfull.x,healthfull.y,healthfull.w,healthfull.h);
    pop();
  }
  else if (hiker.lives === 2) {
    push();
    imageMode(CORNER);
    image(healthtwothirds.image,healthtwothirds.x,healthtwothirds.y,healthtwothirds.w,healthtwothirds.h);
    pop();
  }
  else if (hiker.lives === 1) {
    push();
    imageMode(CORNER);
    image(healthonethird.image,healthonethird.x,healthonethird.y,healthonethird.w,healthonethird.h);
    pop();
  }
  else if (hiker.lives === 0) {
    push();
    imageMode(CORNER);
    image(healthnone.image,healthnone.x,healthnone.y,healthnone.w,healthnone.h);
    pop();

    state = 'end';

    mySound.stop(); //SOUND STOPS
    mySound2.stop(); //SOUND STOPS
  }
}

//Making the clouds
function displayClouds(){

//Cloud1 Movement
  cloud.x = cloud.x + cloud.vx;

  if (cloud.x > 800) {
    cloud.x = 0;
    cloud.y = random(0,300);
  }

//Cloud2 Movement
cloud2.x = cloud2.x + cloud2.vx;

if (cloud2.x > 800) {
  cloud2.x = 0;
  cloud2.y = random(0,330);
}

//Cloud1
  push();
  fill(cloud.fill.r,cloud.fill.g,cloud.fill.b,cloud.fill.a);
  ellipse(cloud.x,cloud.y,cloud.w,cloud.h);

//Cloud2
  ellipse(cloud2.x,cloud2.y,cloud2.w,cloud2.h);
  pop();

//Change the speed of the clouds
    if (mouseIsPressed){

//Speed of cloud1
    cloud.x = cloud.x + cloud.vx + cloud.speed;

//Speed of cloud2
    cloud2.x = cloud2.x + cloud2.vx + cloud2.speed;
  }
}

//Making The Trees
function displayTrees(){

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
  };

  //right tree
  let tree3 = {
    x: 380,
    y: 600,
    x2: 600,
    y2: 600,
    x3: 500,
    y3: 400,
  };

//Left Tree
  push();
  fill(tree.fill.r,tree.fill.g,tree.fill.b);
  triangle(tree.x,tree.y,tree.x2,tree.y2,tree.x3,tree.y3);

//Middle Tree
  triangle(tree2.x,tree2.y,tree2.x2,tree2.y2,tree2.x3,tree2.y3);

//Right Tree
  triangle(tree3.x,tree3.y,tree3.x2,tree3.y2,tree3.x3,tree3.y3);
  pop();
}

//Making The Mountains
function displayMountains(){

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
  push();
  fill(mountain.fill.r,mountain.fill.g,mountain.fill.b);
  triangle(mountain.x,mountain.y,mountain.x2,mountain.y2,mountain.x3,mountain.y3);

//Making Right mountain
  triangle(mountain2.x,mountain2.y,mountain2.x2,mountain2.y2,mountain2.x3,mountain2.y3);
  pop();
//Making Middle Left mountain
  push();
  fill(mountain3.fill.r,mountain3.fill.g,mountain3.fill.b);
  triangle(mountain3.x,mountain3.y,mountain3.x2,mountain2.y2,mountain3.x3,mountain3.y3);

//Making Middle Right mountain
  triangle(mountain4.x,mountain4.y,mountain4.x2,mountain4.y2,mountain4.x3,mountain4.y3);
  pop();
}

//When Hit
function hit(){

  let hitColor = {
    x: 0,
    y: 0,
    size: 1000,
    fill:{
    r: 252,
    g: 99,
    b: 88,
    bright:100,
    a: 255
    }
  };

//What happens if Hiker gets hit
  let d = dist(hiker.x,hiker.y,rock.x,rock.y);
  if (d < rock.w/3 + hiker.w/3) {

//If the rock hits the hiker, the hiker loses a life
    hiker.lives = hiker.lives + hiker.livelost;

//A quick red overlay appears when hit for less than a second
    fill(hitColor.fill.r,hitColor.fill.g,hitColor.fill.b,hitColor.fill.bright,hitColor.fill.a);
    rect(hitColor.x,hitColor.y,hitColor.size);

//Respawns the rock at the top if it hits the hiker
    rock.x = random(0,680);
    rock.y = 0;

  }
}

//CHANGING STATE
function mouseClicked() {
  if (state === 'title') {
    if (mouseX > 250 && mouseX < 350) { //Location of Play Button for X
    if (mouseY > 360 && mouseY < 480) { //Location of Play Button for Y
    state ='simulation';
      }
    }
  }
}
