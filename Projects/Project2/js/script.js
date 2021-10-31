/**
Title of Project
Alex Cho




/========LEGEND========\
w = width               y = Y-Position
h = height              image = specified image
x = X-position          imageforhover = secondary image used for hover
font = specified font   r = red value
g = green value         b = blue value
a = alpha value
=======================/

References for Images/Fonts/Sounds/Coding Ideas

=============Images=============

=============Fonts==============
Digital Clock Font : https://www.dafont.com/alarm-clock.font
=============Sounds=============

============CodeIdeas===========
These are examples that helped me come up with my own ideas and that I took inspiration from.

Digital Clock Idea : https://editor.p5js.org/D_Snyder/sketches/Xtx2Zu9D5
Rain Idea: Took inspiration from the Juggle Garden exercise. We went over gravity and those type of physics.
Username and password idea inspired by Pippin's code : https://editor.p5js.org/pippinbarr/sketches/k4ETSg3oc
*/

"use strict";

/*=============================
BASICS/MISC
===============================*/

//Determine the canvas position
let canvasDimensons = {
  x: 1280,
  y: 720,
};

//Array for raindrops
let raindrop = [];
//Amount of raindrops
let numrainDrops = 200;

//Store the songs here to be used for a shufflemode
let songs = [];

//Create variables for bedlamp lighting - Will be created in the script.js file
let bedlamplight = undefined;
let bedlamplightfill;
//CREATING colour values for when the bed lamp light is off
let bedlampOff = {
  r: 255,
  g: 255,
  b: 255,
  a: 0,
}
//CREATING colour values for when the bed lamp light is on
let bedlampOn = {
  r: 255,
  g: 255,
  b: 255,
  a: 50,
};

//Setting the username/password
let usernamecode = 'sleep';
let passwordcode = '7259';

//What has been typed for the username
let usercurrentInput = '';
//What has been typed for the password
let passcurrentInput = '';

/*=============================
Classes to be called
===============================*/

//=========MAIN ROOM==========//
//Cityscape to be called for a class
let cityscape = undefined;
//Mainroom to be called for a class
let mainroom = undefined;
//Bed to be called for a class
let bed = undefined;
//bedlamp to be called for a class
let bedlamp = undefined;
//laptop to be called for a class
let laptop = undefined;
//laptop background to be called for a class
let laptopbg = undefined;
//laptopmenu to be called for a class
let laptopmenu = undefined;
//laptop login info to be called for a class
let laptoploginfo = undefined;
//Passwordloginfo to be called for a class
let passwordlog = undefined;
//username to be called for a class
let username = undefined;
//password to be called for a class
let password = undefined;
//Alarmclock to be called for a class
let alarmclock = undefined;
//Alarmtime to be called for a class
let alarmtime = undefined;
//Arrows to be called for a class
let arrowright = undefined;
let arrowleft = undefined;

//=========Lofify App==========//
//Lofify screen to be called for a class
let lofify = undefined;

/*=============================
Fonts
===============================*/

let alarmtimeFont;

/*=============================
Sounds
===============================*/
//Sound of rain
let rainSFX = undefined;
//Sound of bedlamp chain
let bedlampSFX = undefined;

/*=============================
Images
===============================*/

//=========MAIN ROOM==========//
//Images of cityscapes
let cityscapeImage = undefined;
//Image of rooms
let mainroomImage = undefined;
//Image of main room interactive objects
//Images of the bed
let bedImage = undefined;
let bedhoverImage = undefined;
//Images of the bedlamp
let bedlampImage = undefined;
let bedlamphoverImage = undefined;
//Images of the laptop
let laptopImage = undefined;
let laptophoverImage = undefined;
//Image of the laptop background
let laptopbgImage = undefined;
//Image of laptop menu
let laptopmenuImage = undefined;
//Image of laptop login info
let laptoploginfoImage = undefined;
//Image of passwordlog
let passwordlogImage = undefined;
//Image of the alarm clock
let alarmclockImage = undefined;
//Image of arrows
let arrowrightImage = undefined;
let arrowRhoverImage = undefined;
let arrowleftImage = undefined;
let arrowLhoverImage = undefined;

//=========Lofify App==========//
//Image of lofify in app
let lofifyImage = undefined;

//What state is it in
let state = 'LaptopMenuScreen'

/*=============================
IMAGES/SOUNDS/FONTS TO PRELOAD
===============================*/

function preload() {

/*=============================
Fonts
===============================*/

//Loading a font for the alarm clock time
  alarmtimeFont = loadFont('assets/fonts/alarmclock.ttf');

/*=============================
Sounds
===============================*/
  songs[0] = loadSound('assets/sounds/CherryTree.mp3');
  songs[1] = loadSound('assets/sounds/OnMyMind.mp3');
  songs[2] = loadSound('assets/sounds/Reflections.mp3');
  songs[3] = loadSound('assets/sounds/Overcast.mp3');
  songs[4] = loadSound('assets/sounds/Mist.mp3');
  songs[5] = loadSound('assets/sounds/MidnightJourney.mp3');



  bedlampSFX = loadSound('assets/sounds/bedlampsfx.wav');
  rainSFX = loadSound('assets/sounds/Rain.wav');

/*=============================
Images
===============================*/

//Loading images of cityscapes
  cityscapeImage = loadImage('assets/images/Background/bgmain.png');

//Loading images of rooms
  mainroomImage = loadImage('assets/images/Rooms/MainRoom.png');

//Loading images of main room interactive objects
//Loading the bed images
  bedImage = loadImage('assets/images/Objects/bed.png');
  bedhoverImage = loadImage('assets/images/Objects/bedhover.png');
//Loading the bedlamp images
  bedlampImage =  loadImage('assets/images/Objects/lamp.png');
  bedlamphoverImage = loadImage('assets/images/Objects/lamphover.png');

//Loading the laptop images
  laptopImage = loadImage('assets/images/Objects/laptop.png');
  laptophoverImage = loadImage('assets/images/Objects/laptophover.png');
  laptopbgImage = loadImage('assets/images/Objects/laptopbg.gif');

//Loading the laptop menu image
  laptopmenuImage = loadImage('assets/images/Objects/menuscreen.png');
//Loading the laptop login info
  laptoploginfoImage = loadImage('assets/images/Objects/laptoplogin.png');
//loading the passwordlog info
  passwordlogImage = loadImage('assets/images/Objects/passwordstate.png');

//Loading the lofify screen
  lofifyImage = loadImage('assets/images/Objects/lofify.png');

//Loading the alarm clock image
  alarmclockImage = loadImage('assets/images/Objects/alarmclock.png');

//Loading images of arrows
  arrowrightImage = loadImage('assets/images/Arrows/arrowright.png');
  arrowRhoverImage = loadImage('assets/images/Arrows/arrowrighthover.png');
  arrowleftImage = loadImage('assets/images/Arrows/arrowleft.png');
  arrowLhoverImage = loadImage('assets/images/Arrows/arrowlefthover.png');
}

/*=====================================
SETTING UP! CANVAS|CLASSES|ARRAYS|BEDLAMPLIGHTS
======================================*/
function setup() {
//Creating the canvas
  createCanvas(canvasDimensons.x,canvasDimensons.y);

//Setting up sounds (Volume,Loops)
//Set the volume down a bit
  rainSFX.setVolume(0.5);
//Loop the rain SFX
  rainSFX.loop();

  songs = random(songs);

//Determing a set fill for the bed lamp light before toggling it
  bedlamplightfill = color(bedlampOff.r,bedlampOff.g,bedlampOff.b,bedlampOff.a);

//Bed lamp light parameters
  bedlamplight = {
    x: 0,
    y: 0,
    w: 1280,
    h: 720,
    on: false, //Light Starts off
  };

//RainDrop to be called from class
//Create a for loop if i is less than 200 add a new rain drop
//Parameters (w,h,x,y)
  for (let i = 0; i < numrainDrops; i++) {
    raindrop[i] = new RainDrop(random(1,4), random(5,8), random(0, width), random(0, -height));
  }

//Cityscapes class parameters(w,h,x,y,image)
  cityscape = new Cityscape(1280,720,640,360,cityscapeImage);

//Rooms class parameters(w,h,x,y,image)
  mainroom = new Mainroom(1280,720,640,360,mainroomImage);

//Interactive objects class parameters(w,h,x,y,image,imageforhover)
//Bed parameters
  bed = new Bed(600,400,585,554.8,bedImage,bedhoverImage);
//Bed lamp parameters
  bedlamp = new BedLamp(70,100,520,370,bedlampImage,bedlamphoverImage);
//Laptop parameters
  laptop = new Laptop(80,90,180,465,laptopImage,laptophoverImage);
//Laptop screen saver parameters
  laptopbg = new LaptopBackground(56,37,180,454,laptopbgImage);
//laptop menu parameteres
  laptopmenu = new LaptopMenu(1280,720,640,360,laptopmenuImage);
//Laptop login info screen parameters
  laptoploginfo = new LaptopLogin(1280,720,640,360,laptoploginfoImage);
//Once the username is correct this screen will overlay to type the password
  passwordlog = new PasswordLog(1280,720,640,360,passwordlogImage);
//Login Info username and password
  username = new Username(330,1240);
  password = new Password(450,1240);

//Lofify screen
  lofify = new Lofify(1280,720,640,360,lofifyImage);

//The alarm clock parameters
  alarmclock = new AlarmClock(100,36,650,400,alarmclockImage);
//The time on the alarm clock
//Parameters(x,y,font)
  alarmtime = new AlarmTime(650,405,alarmtimeFont);

//Arrows class parameters(w,h,x,y,image,imageforhover)
  arrowleft = new LeftArrow(100,100,60,660,arrowleftImage,arrowLhoverImage);
  arrowright = new RightArrow(100,100,1220,660,arrowrightImage,arrowRhoverImage);
}

function draw() {
//Organize what states the simulation consists of...
//The room the user begins on
  if (state == 'MainRoom') {
    mainRoom();
  }
//If the laptop is pressed go to the log on screen
  else if (state == 'LaptopLogIn') {
    laptoplogin();
  }
//If the username is correct overlay this screen to type the password
  else if (state == 'PasswordState') {
    passwordlog.display();
    password.display();
  }
  else if (state == 'LaptopMenuScreen') {
    laptopMenu();
  }
  else if (state == 'LofifyScreen') {
    lofifyMenu();
  }
}

//Everything relevant to the main room - All needs to be in the same function because it is going to be converted to a state
function mainRoom() {
//Display the cityscape
  cityscape.display();
//Display the raindrops //Need a for loop for arrays. Call the class functions in the for loop to display the raindrops
  for (let i = 0; i < raindrop.length; i++) {
    raindrop[i].display();
    raindrop[i].update();
  }
//Display the room
  mainroom.display();
//Display the bed
  bed.display();
//Display the bed lamp
  bedlamp.display();
//Display the laptop
  laptop.display();
//Display the laptop background
  laptopbg.display();
//Display the alarm clock and the alarm time
  alarmclock.display();
  alarmtime.display();
//Display the bed lamp lighting // Check if it is on or off
  displaybedlamplight();
  checkbedlamplight();
//Display the Arrows to switch between screens
  arrowleft.display();
  arrowright.display();
}

//Creating the bed light lamp display function in script.js
function displaybedlamplight() {
  push();
  noStroke();
  fill(bedlamplightfill);
  rect(bedlamplight.x,bedlamplight.y,bedlamplight.w,bedlamplight.h);
  pop();
}

//Check if the light is on or off
function checkbedlamplight() {
  if (bedlamplight.on) {
    bedlamplightfill = color(bedlampOn.r,bedlampOn.g,bedlampOn.b,bedlampOn.a);
  }
  else {
    bedlamplightfill = color(bedlampOff.r,bedlampOff.g,bedlampOff.b,bedlampOff.a);
  }
}

//Everything relevant to the laptop login info screen
function laptoplogin() {
  //Display the laptop login info
  laptoploginfo.display();
  username.display();
}

//Everything relevant to the laptop menu screen
function laptopMenu() {
  laptopmenu.display();
}

//Everything relevant to the lofify menu screen
function lofifyMenu() {
  lofify.display();
}

/*=====P5 Functions====*\
keyTyped,keyPressed,mouseClicked
\*=====================*/

//When a key is typed it will display on the LaptopLogIn screen. This needs to be done in the script.js file for it to work.
function keyTyped() {
  usercurrentInput += key;
  if (state == 'PasswordState'){
  passcurrentInput += key;
  }
}

//When the backspace key is pressed it will delete the characters. *Trying to fix it so it deletes one character at a time keep getting NaN
function keyPressed() {
  if (keyCode ==  8) {
    usercurrentInput = '';
    passcurrentInput = '';
  }
}

//Mouse Interaction
function mouseClicked() {
  userStartAudio();
//If the state is 'MainRoom' do the following orders
  if (state == 'MainRoom') {
//Play the SFX for the raindrops
      rainSFX.play();
//If the bed lamp is clicked once it will turn on, if it is clicked twice it will turn off
    if (mouseX > 500 && mouseX < 545) {
    if (mouseY > 320 && mouseY < 405) {
//Toggles between the light being on and off
      bedlamplight.on = !bedlamplight.on
//Play the SFX for the bed lamp if it being turned on or off
      bedlampSFX.play();
      }
    }
//If the laptop is clicked, open up the login info
    if (mouseX > 140 && mouseX < 215) {
    if (mouseY > 400 && mouseY < 500) {
//Change states when the laptop is clicked
      state = 'LaptopLogIn'
//Stop the rain SFX during this state
      rainSFX.stop();
      }
    }
  }
//If the Sleep button is pressed, return to the MainRoom
  if (state == 'LaptopLogIn') {
    if (mouseX > 600 && mouseX < 680) {
    if (mouseY > 550 && mouseY < 640) {
//This is the current state it will be
      state = 'MainRoom'
//Reset the usercurrentInput
      usercurrentInput = '';
//Reset the currentInput
      passcurrentInput = '';
//Resume the rain sound upon pressing the button
      rainSFX.play();
      }
    }
  }
//If the Sleep button is pressed, return to the MainRoom
  if (state == 'PasswordState') {
    if (mouseX > 600 && mouseX < 680) {
    if (mouseY > 550 && mouseY < 640) {
//This is the current state it will be
      state = 'MainRoom'
//Reset the usercurrentInput
      usercurrentInput = '';
//Reset the passcurrentInput
      passcurrentInput = '';
//Resume the rain sound upon pressing the button
      rainSFX.play();
      }
    }
  }
//If the Log out button is pressed on the laptop menu screen do the following sequence...
  if (state == 'LaptopMenuScreen') {
//Stop the rain SFX during this state
      rainSFX.stop();
    if (mouseX > 5 && mouseX < 115) {
    if (mouseY > 10 && mouseY < 118) {
//This is the current state it will be
      state = 'MainRoom'
//Reset the usercurrentInput
      usercurrentInput = '';
//Reset the passcurrentInput
      passcurrentInput = '';
//Resume the rain sound upon pressing the button
      rainSFX.play();
      }
    }
//If the lofify app is pressed apply the following sequence...
    if (mouseX > 5 && mouseX < 115) {
    if (mouseY > 120 && mouseY < 235) {
      state = 'LofifyScreen'
      }
    }
  }
//Functionality with mouse clicked on the lofify screen
  if (state == 'LofifyScreen') {
    if (mouseX > 350 && mouseX < 460){
    if (mouseY > 140 && mouseY < 220){
      songs.stop();
      }
    }
    if (mouseX > 45 && mouseX < 275) {
    if (mouseY > 630 && mouseY < 705) {
      state = 'LaptopMenuScreen'
      }
    }
  }
}

//Functionality for double clicked.
function doubleClicked() {
  if (state == 'LofifyScreen') {
    if (mouseX > 350 && mouseX < 460){
    if (mouseY > 140 && mouseY < 220){
//If double clicked play shuffle mode
      songs.play();
      }
    }
  }
}
