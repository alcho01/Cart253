/**
Title of Project 3:00AM CYCLE
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
Cursor Look http://www.rw-designer.com/cursor-view/166785.png
Cursor Interact http://www.rw-designer.com/cursor-view/146672.png
=============Fonts==============
Digital Clock Font : https://www.dafont.com/alarm-clock.font
Lofi font : https://www.dafont.com/digit-lofi.font
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
//sound volume
let songVolume = 0.6;
let sfxVolume = 0.5;

//Create variables for the colour of the lamp lighting
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

//Set the first task to uncomplete
let task1complete = false;

//Setting the username/password
let usernamecode = 'sleep';
let passwordcode = '7259';

//What has been typed for the username
let usercurrentInput = '';
//What has been typed for the password
let passcurrentInput = '';

//What needs to be typed in the atom app
let atomCode = 'image(object.image,object.x,object.y,object.w,object.h);';
//What has been typed for the code
let atomcurrentInput = '';

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
//bedlamp lighting to be called for a class
let bedlamplight = undefined;
//Hidden Message to be called for a class
let hiddenmessage = undefined;
//laptop to be called for a class
let laptop = undefined;
//laptop background to be called for a class
let laptopbg = undefined;
//laptopmenu to be called for a class
let laptopmenu = undefined;
//laptop login info to be called for a class (This is the screen when no input is entered)
let laptoploginfo = undefined;
//Passwordloginfo to be called for a class (This class is called when the username is properly encrypted )
let passwordlog = undefined;
//username to be called for a class
let username = undefined;
//password to be called for a class
let password = undefined;
//Alarmclock to be called for a class
let alarmclock = undefined;
//Alarmtime to be called for a class
let alarmtime = undefined;
//Alert/Pop up that you can't do that
let alertsleep = undefined;
//Arrows to be called for a class
let arrowright = undefined;
let arrowleft = undefined;

//=========Laptop Apps==========//
//Lofify screen to be called for a class
let lofify = undefined;

//Atom entities to be called for a class
let atom = undefined;
let atomText = undefined;
let sudoku = undefined;

/*=============================
Fonts
===============================*/

let alarmtimeFont;
let lofiFont;

/*=============================
Sounds
===============================*/
//Sound of rain
let rainSFX = undefined;
//Sound of bedlamp chain
let bedlampSFX = undefined;
//Song list
let song1 = undefined;
let song2 = undefined;
let song3 = undefined;
let song4 = undefined;
let song5 = undefined;
let song6 = undefined;
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
//Image of the hidden message
let hiddenmessageImage = undefined;
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
//Image of no sleep alert
let alertsleepImage = undefined;
//Image of arrows
let arrowrightImage = undefined;
let arrowRhoverImage = undefined;
let arrowleftImage = undefined;
let arrowLhoverImage = undefined;

//=========Laptop Apps==========//
//Image of lofify in app
let lofifyImage = undefined;
//Image of atom app when opened
let atomImage = undefined;
let sudokuImage = undefined;


//What state is it in
let state = 'MainRoom'

/*=============================
IMAGES/SOUNDS/FONTS TO PRELOAD
===============================*/

function preload() {

/*=============================
Fonts
===============================*/

//Loading a font for the alarm clock time
  alarmtimeFont = loadFont('assets/fonts/alarmclock.ttf');
//Loading a font for lofify currently playing
  lofiFont = loadFont('assets/fonts/lofi.ttf');

/*=============================
Sounds
===============================*/

//Playlist songs found under lofify application
  song1 = loadSound('assets/sounds/CherryTree.mp3');
  song2 = loadSound('assets/sounds/OnMyMind.mp3');
  song3 = loadSound('assets/sounds/Reflections.mp3');
  song4 = loadSound('assets/sounds/Overcast.mp3');
  song5 = loadSound('assets/sounds/Mist.mp3');
  song6 = loadSound('assets/sounds/MidnightJourney.mp3');

//Object sounds
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

//Loading Hidden Message
  hiddenmessageImage = loadImage('assets/images/Objects/hiddenmessage.png');

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
//Loading the atom screen
  atomImage = loadImage('assets/images/Objects/atom.png');
//Loading the sudoku image
  sudokuImage = loadImage('assets/images/Objects/sudoku.png');

//Loading the alarm clock image
  alarmclockImage = loadImage('assets/images/Objects/alarmclock.png');

//Loading the alert sleep image
  alertsleepImage = loadImage('assets/images/Objects/nosleep.png');

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
  rainSFX.setVolume(sfxVolume);
//Loop the rain SFX
  rainSFX.loop();
//Sets the song volume lower
    song1.setVolume(songVolume);
    song2.setVolume(songVolume);
    song3.setVolume(songVolume);
    song4.setVolume(songVolume);
    song5.setVolume(songVolume);
    song6.setVolume(songVolume);
//Determing a set fill for the bed lamp light before toggling it
  bedlamplightfill = color(bedlampOff.r,bedlampOff.g,bedlampOff.b,bedlampOff.a);

//RainDrop to be called from class
//Create a for loop if i is less than 200 add a new rain drop
//Parameters (w,h,x,y)
  for (let i = 0; i < numrainDrops; i++) {
    raindrop[i] = new RainDrop(random(1,4), random(5,8), random(0, width), random(50, 800));
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
//Bed lamp light parameters
  bedlamplight = new BedLampLight(1280,720,0,0);
//Hidden message parameters
  hiddenmessage = new HiddenMessage(100,100,600,50,hiddenmessageImage);
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

//atom screen
  atom = new Atom(1280,720,640,360,atomImage);
//atom text (x,y)
  atomText = new AtomText(250,533);
//Sudoku (w,h,x,y,image)
  sudoku = new Sudoku(350,350,950,350,sudokuImage);

//The alarm clock parameters
  alarmclock = new AlarmClock(100,36,650,400,alarmclockImage);
//The time on the alarm clock
//Parameters(x,y,font)
  alarmtime = new AlarmTime(650,405,alarmtimeFont);

//alertsleep parameters (w,h,x,y,image)
  alertsleep = new AlertSleep(400,100,210,60,alertsleepImage);

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
//go to the laptop menu screen
  else if (state == 'LaptopMenuScreen') {
    laptopMenu();
  }
//from the laptop menu screen go to the app lofify
  else if (state == 'LofifyScreen') {
    lofifyMenu();
  }
//If atom app is pressed go to the atom screen
  else if (state == 'AtomScreen') {
    atomMenu();
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
//Display the alert that the user can't fall asleep
  alertsleep.display();
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
  bedlamplight.display();
  bedlamplight.checkbedlamplight();
//Display the hidden message
  hiddenmessage.display();
//Display the Arrows to switch between screens
  arrowleft.display();
  arrowright.display();
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

//Everything relevant to the atom menu screen
function atomMenu() {
  atom.display();
  atomText.display();
}

/*=====P5 Functions====*\
keyTyped,keyPressed,mouseClicked
\*=====================*/

//When a key is typed it will display on the LaptopLogIn screen. This needs to be done in the script.js file for it to work.
function keyTyped() {
  usercurrentInput += key;
  if (state == 'PasswordState') {
//If it is under the password state allow this
    passcurrentInput += key;
  }
  else if (state == 'AtomScreen') {
    atomcurrentInput += key;
  }
}

//When the backspace key is pressed it will delete the characters. *Trying to fix it so it deletes one character at a time keep getting NaN
function keyPressed() {
  if (keyCode ==  8) {
    usercurrentInput = '';
    passcurrentInput = '';
    atomcurrentInput = '';
  }
}

//Mouse Interaction
function mouseClicked() {
  userStartAudio();
//If the state is 'MainRoom' do the following orders
  if (state == 'MainRoom') {
    mainroom.mouseClicked();
  }
//username state
  if (state == 'LaptopLogIn') {
    laptoploginfo.mouseClicked();
  }
//password state
  if (state == 'PasswordState') {
    passwordlog.mouseClicked();
  }
//If the Log out button is pressed on the laptop menu screen do the following sequence...
  if (state == 'LaptopMenuScreen') {
    laptopmenu.mouseClicked();
  }
//Functionality with mouse clicked on the lofify screen
  if (state == 'LofifyScreen') {
    lofify.mouseClicked();
  }
//Functionality with mouse clicked on the atom screen
  if (state == 'AtomScreen') {
    atom.mouseClicked();
  }
}

//Functionality for double clicked.
function doubleClicked() {
  if (state == 'LofifyScreen') {
    lofify.doubleClicked();
  }
}
