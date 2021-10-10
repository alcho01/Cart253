/**
HIKE
Alex Cho

At Least 2 Moving Elements[DONE]
Interactivity[DONE]
TitleScreen [DONE]
EndScreen [DONE]

Idea:
*/

//Background Colors
let bg = {
  r: 10,
  g: 50,
  b: 115,
  fill:{
  r2: 122,
  g2: 165,
  b2: 235,
  }
};
let bgcolor;
let bgmain = {
  r: 89,
  g: 127,
  b: 189
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

//Healthbar settings //Probably should have used an Array
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

//Landscape settings
let landscape = {
  x: 300,
  y: 300,
  w: 700,
  h: 400,
  image: undefined
};

let mountain = {
  x: -100,
  x2: 650,
  x3: 300,
  y: 600,
  y2: 700,
  w: 500,
  w2: 800,
  h: 800,
  h2: 720,
  h3: 630,
  image: undefined,
  image2: undefined
};

let tree = {
  x: 70,
  x2: 150,
  x3: 210,
  x4: 300,
  x5: 380,
  x6: 440,
  x7: 580,
  y: 440,
  y2: 550,
  w: 200,
  w2: 240,
  w3: 290,
  h: 230,
  h2: 200,
  h3: 340,
  image: undefined
};

let bridge = {
  x: 300,
  y: 425,
  y2: 480,
  w: 800,
  h: 200,
  h2: 50,
  image: undefined,
  image2: undefined
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

//Clouds
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
  y:undefined,
  size:100,
  fill:{
    r: 230,
    g: 170,
    b: 7,
  }
};
let suncolor;
let position = 25;

//Lake
let lake = {
  x: undefined,
  y: undefined,
  fill:{
    r: 77,
    g: 152,
    b: 168,
    a:200,
  }
};
let noiseY = 0.0;
let noiseX = 0;
let lakecolor;

//Buttons
let daybutton = {
  x: 560,
  y: 760,
  w: 70,
  h: 70,
  image: undefined
};
let nightbutton = {
  x: 560,
  y: 685,
  w: 70,
  h: 70,
  image: undefined
};
let cloudbutton = {
  x: 560,
  y: 610,
  w: 70,
  h: 70,
  image: undefined
};
let playButton = {
  x: 290,
  y: 430,
  w: 100,
  h: 100,
  image: undefined
};
let returnhome = {
  x: 410,
  y: 560,
  w: 200,
  h: 200,
  image: undefined
};

let controlButton = {
  x: 290,
  y: 540,
  w: 100,
  h: 100,
  image: undefined

}

//Screens
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

let help = {
  x: 300,
  y: 400,
  w: 600,
  h: 800,
  image: undefined

};

let state = 'title'

function preload(){

//Main assets
  landscape.image = loadImage('assets/images/landscape.png');
  mountain.image = loadImage('assets/images/mountain.png');
  mountain.image2 = loadImage('assets/images/mountainrange.png');
  bridge.image = loadImage('assets/images/bridge1.png');
  bridge.image2 = loadImage('assets/images/bridge2.png');
  tree.image = loadImage('assets/images/tree.png');
  hiker.image = loadImage('assets/images/hiker.png');
  rock.image = loadImage('assets/images/rock.png');

//Button assets
  daybutton.image = loadImage('assets/images/daybutton.png');
  nightbutton.image = loadImage('assets/images/nightbutton.png');
  cloudbutton.image = loadImage('assets/images/cloudbutton.png');

//HealthBar
  healthfull.image = loadImage('assets/images/healthfull.png');
  healthtwothirds.image = loadImage('assets/images/healthtwothirds.png');
  healthonethird.image = loadImage('assets/images/healthonethird.png');
  healthnone.image = loadImage('assets/images/healthnon.png');

//State Screens
  title.image = loadImage('assets/images/title.png');
  playButton.image = loadImage('assets/images/playbutton.png');
  controlButton.image = loadImage('assets/images/controlsbutton.png');
  help.image = loadImage('assets/images/controls.png');
  end.image = loadImage('assets/images/end.png');
  returnhome.image = loadImage('assets/images/returnhome.png');

//Sounds 
 mySound = loadSound('assets/sounds/waves.wav');
 mySound2 = loadSound('assets/sounds/birds.wav');
}

//Setting up what needs to be done beforehand
function setup() {

  userStartAudio()

  bgcolor = color(bgmain.r,bgmain.g,bgmain.b);
  lakecolor = color(lake.fill.r,lake.fill.g,lake.fill.b);
  suncolor = color(sun.fill.r,sun.fill.g,sun.fill.b);

//Waves Sound FX
  mySound.setVolume(0.03); //REFERENCE - https://mixkit.co/free-sound-effects/waves/
  mySound.loop();

//Birds Sound FX
  mySound2.setVolume(0.07); //REFERENCE - https://mixkit.co/free-sound-effects/discover/birds/
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

  position = (500);
}

//Calling the Functions
function draw() {
  background(bgcolor);

  if (state === 'title') {
    titleScreen();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'end') {
    endScreen();
  }
  else if (state === 'help') {
    helpScreen();
  }
}

//Reset The Sun Settings
function sunReset() {

//Sun Position
  sun.x = 300;
  position = (500);

//Sun Color
  suncolor = color(sun.fill.r,sun.fill.g,sun.fill.b);
}

//Reset The Hiker Position
function hikerReset() {

  hiker.x = 300;
  hiker.y = 380;
}

//Reset The lives
function livesReset() {
hiker.lives = 3;
}

function titleScreen() {
//Title Screen
  imageMode(CENTER);
  image(title.image,title.x,title.y,title.w,title.h);

  mySound.stop();
  mySound2.stop();
//Play Button
  imageMode(CENTER);
  image(playButton.image,playButton.x,playButton.y,playButton.w,playButton.h);

//Control Button;
  imageMode(CENTER);
  image(controlButton.image,controlButton.x,controlButton.y,controlButton.w,controlButton.h);

  hikerReset();
  livesReset();
  sunReset();
  bgcolor = color(bgmain.r,bgmain.g,bgmain.b); //Reset Background Color
  lakecolor = color(lake.fill.r,lake.fill.g,lake.fill.b); //Reset Lake Color
  }

function endScreen() {
//end screen
  imageMode(CENTER);
  image(end.image,end.x,end.y,end.w,end.h);

//returnhomebutton
  imageMode(CENTER);
  image(returnhome.image,returnhome.x,returnhome.y,returnhome.w,returnhome.h);
}

function helpScreen() {
//Help screen
  imageMode(CENTER);
  image(help.image,help.x,help.y,help.w,help.h);

}

function simulation(){
  displaySun();
  displayLandscape();
  displayLake();
  displayBridge();
  displayRock();
  displayHiker();
  displayBridgerail();
  displayClouds();
  displayTree();
  displayMountains();
  healthBar();
  dayButton();
  nightButton();
  cloudButton();
  hit();
}

//Making The sun
function displaySun(){

//Sun movement
  position = constrain(position,70,height);

//Sun display
  fill(suncolor);
  ellipse(sun.x,position,sun.size);
  }

//Displaying the Landscape
function displayLandscape(){

  imageMode(CENTER);
  image(landscape.image,landscape.x,landscape.y,landscape.w,landscape.h);
}

//Making The Lake //Reference https://p5js.org/examples/math-noise-wave.html
function displayLake(){

//Fill Lake
  fill(lakecolor);

//Shape/Depth/Movement of Wave
  beginShape();

  let noiseX = 0;
  for (let x = 0; x < width; x += 23) { //intensity of the wave (higher number makes it smoother)
    let y = map(noise(noiseX, noiseY), 0,1,400,300); //Height of the Waves
    vertex(x,y);
    noiseX += 0.05;
    }

    noiseY += 0.0095;
  vertex(width, height); //Create Beginning Shape
  vertex(0,height);   //Create End Shape
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

//Displaying The Rock
  imageMode(CENTER);
  image(rock.image,rock.x,rock.y,rock.w,rock.h);
}

//Making the bridge
function displayBridge(){

//Displaying the bridge
  imageMode(CENTER);
  image(bridge.image,bridge.x,bridge.y,bridge.w,bridge.h);
}

//Displaying bridgerail
function displayBridgerail(){
  imageMode(CENTER);
  image(bridge.image2,bridge.x,bridge.y2,bridge.w,bridge.h2);
  }

//Making hiker
function displayHiker(){

//Boundaries
  let xc = constrain(hiker.x,0,width);
  let yc = constrain(hiker.y,330,430);

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

//Displaying the Hiker
push();
imageMode(CENTER);
image(hiker.image,hiker.x,hiker.y,hiker.w,hiker.h);
pop();
}

//Making the healthbar
function healthBar() {
//Each life lost changes the healthbar's image
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
//If Hiker runs out of lives the game ends //HealthBar
    state = 'end';
    mySound.stop();
    mySound2.stop();
  }
}

function dayButton() {
//Displaying the dayButton
  push();
  imageMode(CENTER);
  image(daybutton.image,daybutton.x,daybutton.y,daybutton.w,daybutton.h);
  pop();

}

function nightButton() {
//Displaying the nightButton
  push();
  imageMode(CENTER);
  image(nightbutton.image,nightbutton.x,nightbutton.y,nightbutton.w,nightbutton.h);
  pop();

}

function cloudButton() {
//Displaying the cloudButton
  push();
  imageMode(CENTER);
  image(cloudbutton.image,cloudbutton.x,cloudbutton.y,cloudbutton.w,cloudbutton.h);
  pop();
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
      if  (mouseX > 530 && mouseX < 595) { //Cloud Button
      if  (mouseY > 575 && mouseY < 645) {
//Speed of cloud1
    cloud.x = cloud.x + cloud.vx + cloud.speed;

//Speed of cloud2
    cloud2.x = cloud2.x + cloud2.vx + cloud2.speed;

    noiseX = noiseX += 0.3; //Makes the lake fast
    noiseY = noiseY += 0.05; //Makes the lake fast
      }
    }
  }
}

function displayTree() {
//Tree1
  push();
  imageMode(CENTER);
  image(tree.image,tree.x,tree.y,tree.w,tree.h);
  pop();

//Tree2
  push();
  imageMode(CENTER);
  image(tree.image,tree.x2,tree.y2,tree.w,tree.h2);
  pop();

//Tree3
  push();
  imageMode(CENTER);
  image(tree.image,tree.x3,tree.y2,tree.w,tree.h3);
  pop();

//Tree4
    push();
    imageMode(CENTER);
    image(tree.image,tree.x4,tree.y2,tree.w2,tree.h);
    pop();

//Tree5
    push();
    imageMode(CENTER);
    image(tree.image,tree.x5,tree.y2,tree.w2,tree.h);
    pop();

//Tree6
    push();
    imageMode(CENTER);
    image(tree.image,tree.x6,tree.y2,tree.w2,tree.h3);
    pop();

//Tree7
    push();
    imageMode(CENTER);
    image(tree.image,tree.x7,tree.y,tree.w3,tree.h3);
    pop();

}

//Making The Mountains
function displayMountains(){

//LeftMountain
  push();
  imageMode(CENTER);
  image(mountain.image,mountain.x,mountain.y,mountain.w,mountain.h);
  pop();

//RightMountain
  push();
  imageMode(CENTER);
  image(mountain.image,mountain.x2,mountain.y,mountain.w,mountain.h2);
  pop();

//MiddleMountain
  push();
  imageMode(CENTER);
  image(mountain.image2,mountain.x3,mountain.y2,mountain.w2,mountain.h3);
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

  let fillLake = {
    r: 49,
    g: 211,
    b: 247,
    fill: {
    r2: 0,
    g2: 104,
    b2: 133
    }
  };

  let fillSun = {
    r: 232,
    g: 240,
    b: 14,
    fill: {
    r2: 251,
    g2: 252,
    b2: 207
    }
  };


  if (state === 'title') {
    if (mouseX > 250 && mouseX < 350) { //Location of Play Button for X
    if (mouseY > 360 && mouseY < 480) { //Location of Play Button for Y
    state ='simulation';
    mySound.play();
    mySound2.play();
      }
    }
  }
  if (state === 'title') {
    if (mouseX > 250 && mouseX < 350) { //Location of Help Button for X
    if (mouseY > 490 && mouseY < 590) { //Location of Help Button for Y
    state ='help';
      }
    }
  }
  if (state === 'help') {
    if (mouseX > 390 && mouseX < 590) { //Location of HomeHelp Button for X
    if (mouseY > 500 && mouseY < 720) { //Location of HomeHelp Button for Y
    state ='title';
      }
    }
  }
  if (state === 'end') {
    if (mouseX > 310 && mouseX < 510) { //Location of Home Button for X
    if (mouseY > 460 && mouseY < 560) { //Location of Home Button for Y
    state = 'title';
      }
    }
  }
  if (state === 'simulation') {
  if (mouseX > 530 && mouseX < 595) { //Day Button
  if (mouseY > 715 && mouseY < 795) {
    bgcolor = color(bg.fill.r2,bg.fill.g2,bg.fill.b2);
    lakecolor = color(fillLake.r,fillLake.g,fillLake.b); //Lake Color
    suncolor = color(fillSun.r,fillSun.g,fillSun.b); //Sun Color
      }
    }
  if (mouseX > 530 && mouseX < 595) { //Night Button
  if (mouseY > 652 && mouseY < 710) {
    bgcolor = color(bg.r,bg.g,bg.b);
    lakecolor = color(fillLake.fill.r2,fillLake.fill.g2,fillLake.fill.b2); //Lake Color
    suncolor = color(fillSun.fill.r2,fillSun.fill.g2,fillSun.fill.b2); //Moon Color
      }
    }
  }
}

//Move the Sun/Moon Up/Down with the mouse wheel
function mouseWheel() { //https://p5js.org/reference/#/p5/mouseWheel
  print(event.delta);
  position += event.delta;
}
