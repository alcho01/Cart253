/**
Title of Project
Alex Cho


*/

"use strict";

let canvasDimensons = {
  x: 1280,
  y: 720,
};

let cityscape = undefined;
//Image of cityscape
let cityscapeImage = undefined;


function preload() {
  cityscapeImage = loadImage('assets/images/Background/bgmain.png');
  
}

function setup() {
  createCanvas(canvasDimensons.x,canvasDimensons.y);

//Cityscape Settings
  cityscape = new Cityscape(640,360,cityscapeImage);
}

function draw() {
  mainRoom();


}

//Main Room
function mainRoom() {
  cityscape.display();
}
