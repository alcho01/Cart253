/*PROTOTYPE (MOUSE INTERACTIVITY, RAIN, HOVER, NEW CURSOR,)

I tested a few things to make sure I knew it was possible.
The main focus for this prototype is to assure that when the mouse is hovered over an object that is interactable,
it will notify the user of that. (The object will change to black and white)
The other element I wanted to test, was the actual interactivity of the object when the mouse is clicked.
For this example, when the lamp is clicked an overlay will display a lighter shade. (NEEDS TO BE GREYED OUT TO DISPLAY LIGHT)
When it is clicked again it will switch to a darker shade

For the prototype I didn't create classes(Exception raindrop), or really tidy up the code. I will do both of these things in the final assignment.
The raindrop class is to show the understanding of classes and how I will use them for the final.

Other small things,
- Included raindrops. I wanted to see how it would look like.
- A simple cursor change when it hovers over an interactable entity.
- Switch states with KeyPressed

These are some of the fundamental elements required for my final project.

Note, the lamp is the one on the floor not the orange thing.

*/

"use strict";

//Raindrop array
let raindrop = [];

//Room parameters
let room = {
  x:640,
  y: 355,
  w:1280,
  h:735,
  image: undefined
};

//Regular Lamp parameters
let lamp = {
  x:400,
  y: 355,
  w:100,
  h:300,
  image: undefined
};

//On Hover lamp parameters
let lamp2 = {
  x:400,
  y: 355,
  w:100,
  h:300,
  image:undefined
};

//DEFINE LIGHT CREATE THE LIGHT VARIABLE IN SETUP
let light = undefined;
let lightfill;

//Define what state the user is in
let state = 'Room1'

function preload() {
  room.image = loadImage('assets/images/room.png');
  lamp.image = loadImage('assets/images/lamp.png');
  lamp2.image = loadImage('assets/images/lamp2.png');
}
function setup() {
  createCanvas(1280,720);
//THIS IS THE STARTING COLOR FOR LIGHT //LIGHT IS OFF
  lightfill = color(8,8,7,50);

//Class for raindrop
  for(let i = 0; i < 100; i++) {
    raindrop[i] = new RainDrop();
  }

//LIGHT VARIABLE PARAMETERS
  light = {
    x:0,
    y:0,
    w:1280,
    h:720,
    on: false, //LIGHT IS OFF
  };
}

//What happens in each state
function draw() {

  if (state === 'Room1') {
    room1Setup();
  }
  else if (state === 'TestRoom') {
    testroomSetup();
  }
}

//Room 1 entities
function room1Setup() {
  rainDrop();
  displayRoom1();
  lightToggle();
  displayLamp();
  displayLight();
}

//Room 2 display
function testroomSetup() {
  displayTestRoom();
}

function rainDrop() {
//show and update the raindrops
  for(let i = 0; i < 100; i++) {
    raindrop[i].display();
    raindrop[i].move();
  }
}

function displayRoom1() {
//Display the room
  push();
  imageMode(CENTER);
  image(room.image,room.x,room.y,room.w,room.h);
  pop();
}

function lightToggle() {
//DETERMINES IF LIGHT IS ON OR OFF. IF ON PROJECT A LIGHT WHITE. IF OFF PROJECT A DARK TONE
  if (light.on) {
    lightfill = color(255,254,240,80);
    } else {
      lightfill = color(8,8,7,50);
    }
  }

//DISPLAY THE LIGHT OVERLAY //COVER THE SCREEN WITH A RECTANGLE
function displayLight() {

  push();
  noStroke();
  fill(lightfill);
  rect(light.x,light.y,light.w,light.h);
  pop();

}

//DISPLAY THE LAMP
function displayLamp() {
  imageMode(CENTER);
  image(lamp.image,lamp.x,lamp.y,lamp.w,lamp.h);

//IF MOUSE IS WITHIN DISTANCE OF LAMP CHANGE THE IMAGE TO NOTIFY USER IT IS INTERACTABLE
  let d = dist(mouseX,mouseY,lamp.x,lamp.y);
  if (d < lamp.w/3) {
    image(lamp2.image,lamp2.x,lamp2.y,lamp2.w,lamp2.h);
    //Also display this new cursor
    cursor('http://www.rw-designer.com/cursor-view/66390.png');
  }
  else {
    //If the cursor goes off put it back to the original
    cursor();
  }
}

//Placeholder for a room that will be displayed in the final project
function displayTestRoom() {
  push();
  noStroke();
  fill(0);
  rect(0,0,1280,720);
  pop();
}

//IF LAMP IS CLICKED TURN THE LIGHT ON ELSE TURN IT OFF IF CLICKED AGAIN
function mouseClicked() {
  if (mouseX > 380 && mouseX < 405) {
  if (mouseY > 304 && mouseY < 408) {
      light.on = !light.on
    }
  }
}

//Key pressed functionality
function keyPressed() {
  if (state === 'Room1') {
    state = 'TestRoom'
  }
  else if (state === 'TestRoom') {
    state = 'Room1'
  }
}
