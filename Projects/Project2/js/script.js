/**
Title of Project
Alex Cho


*/

"use strict";

//Set up the canvas position
let canvasDimensons = {
  x: 1280,
  y: 720,
};

//Cityscape to be called for a class
let cityscape = undefined;
//Mainroom to be called for a class
let mainroom = undefined;
//Arrows to be called for a class
let arrowright = undefined;
let arrowleft = undefined;

//Image of cityscapes
let cityscapeImage = undefined;

//Image of Rooms
let mainroomImage = undefined;

//Image of arrows
let arrowrightImage = undefined;
let arrowRhoverImage = undefined;
let arrowleftImage = undefined;
let arrowLhoverImage = undefined;


function preload() {
//Loading images of cityscapes
  cityscapeImage = loadImage('assets/images/Background/bgmain.png');

//Loading images of rooms
  mainroomImage = loadImage('assets/images/Rooms/MainRoom.png');

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

//Arrows class parameters(w,h,x,y,image,imageforhover)
  arrowleft = new LeftArrow(100,100,60,660,arrowleftImage,arrowLhoverImage);
  arrowright = new RightArrow(100,100,1220,660,arrowrightImage,arrowRhoverImage);
}

function draw() {
  mainRoom();

}

//Everything relevant to the main room
function mainRoom() {
//Display the cityscape
  cityscape.display();
//Display the room
  mainroom.display();
//Display the Arrows
  arrowleft.display();
  arrowright.display();
}
