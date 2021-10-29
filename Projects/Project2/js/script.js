/**
Title of Project
Alex Cho






References for Images/Fonts/Sounds/Coding Ideas

=============Images=============

=============Fonts==============
Digital Clock Font : https://www.dafont.com/alarm-clock.font
=============Sounds=============

============CodeIdeas===========
Digital Clock Idea : https://editor.p5js.org/D_Snyder/sketches/Xtx2Zu9D5

*/

"use strict";

/*=============================
BASICS
===============================*/

//Set up the canvas position
let canvasDimensons = {
  x: 1280,
  y: 720,
};

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
//Alarmclock to be called for a class
let alarmclock = undefined;
//Alarmtime to be called for a class
let alarmtime = undefined;
//Arrows to be called for a class
let arrowright = undefined;
let arrowleft = undefined;

/*=============================
Fonts
===============================*/

let alarmtimeFont;

/*=============================
Sounds
===============================*/

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
//Image of the alarm clock
let alarmclockImage = undefined;
//Image of arrows
let arrowrightImage = undefined;
let arrowRhoverImage = undefined;
let arrowleftImage = undefined;
let arrowLhoverImage = undefined;

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

//Loading the alarm clock image
  alarmclockImage = loadImage('assets/images/Objects/alarmclock.png');

//Loading images of arrows
  arrowrightImage = loadImage('assets/images/Arrows/arrowright.png');
  arrowRhoverImage = loadImage('assets/images/Arrows/arrowrighthover.png');
  arrowleftImage = loadImage('assets/images/Arrows/arrowleft.png');
  arrowLhoverImage = loadImage('assets/images/Arrows/arrowlefthover.png');
}

function setup() {
  createCanvas(canvasDimensons.x,canvasDimensons.y);

//Cityscapes class parameters(w,h,x,y,image)
  cityscape = new Cityscape(1280,720,640,360,cityscapeImage);

//Rooms class parameters(w,h,x,y,image)
  mainroom = new Mainroom(1280,720,640,360,mainroomImage);

//Interactive objects class parameters(w,h,x,y,image,imageforhover)
  bed = new Bed(600,400,585,554.8,bedImage,bedhoverImage);
  bedlamp = new BedLamp(70,100,520,370,bedlampImage,bedlamphoverImage);

  laptop = new Laptop(80,90,180,465,laptopImage,laptophoverImage);

  alarmclock = new AlarmClock(100,36,650,400,alarmclockImage);
//Parameters(x,y,font)
  alarmtime = new AlarmTime(650,405,alarmtimeFont);

//Arrows class parameters(w,h,x,y,image,imageforhover)
  arrowleft = new LeftArrow(100,100,60,660,arrowleftImage,arrowLhoverImage);
  arrowright = new RightArrow(100,100,1220,660,arrowrightImage,arrowRhoverImage);
}

function draw() {
  mainRoom();

}

//Everything relevant to the main room - All needs to be in the same function because it is going to be converted to a state.
function mainRoom() {
//Display the cityscape
  cityscape.display();
//Display the room
  mainroom.display();
//Display the bed
  bed.display();
//Display the bed lamp
  bedlamp.display();
//Display the laptop
  laptop.display();
//Display the alarm clock and the alarm time
  alarmclock.display();
  alarmtime.display();
//Display the Arrows to switch between screens
  arrowleft.display();
  arrowright.display();
}
