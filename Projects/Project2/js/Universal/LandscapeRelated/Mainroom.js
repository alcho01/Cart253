//The room the game starts on
class Mainroom extends Apartment {
  constructor(w, h, x, y, mainroomImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w, h, x, y);
    //Image
    this.mainroomImage = mainroomImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Bed lamp
    this.bedlampX = 495;
    this.bedlampX2 = 560;
    this.bedlampY = 325;
    this.bedlampY2 = 385;
    //Laptop
    this.laptopX = 140;
    this.laptopX2 = 215;
    this.laptopY = 400;
    this.laptopY2 = 500;
    //Left Arrow
    this.leftArrowX = 14;
    this.leftArrowX2 = 114;
    this.leftArrowY = 611;
    this.leftArrowY2 = 715;
    //Right Arrow
    this.rightArrowX = 1174;
    this.rightArrowX2 = 1274;
    this.rightArrowY = 611;
    this.rightArrowY2 = 715;
    //Paper pile
    this.PileX = 849;
    this.PileX2 = 892;
    this.PileY = 541;
    this.PileY2 = 600;
    //Bed
    this.bedX = 395;
    this.bedX2 = 770;
    this.bedY = 437;
    this.bedY2 = 580;
  }

  //Display the main room - the room the game starts on.
  display() {
    push();
    imageMode(CENTER);
    image(this.mainroomImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse function
  mouseClicked() {
    //Play the SFX for the raindrops
    rainSFX.play();
    //If the bed lamp is clicked once it will turn on, if it is clicked twice it will turn off
    if (mouseX > this.bedlampX && mouseX < this.bedlampX2) {
      if (mouseY > this.bedlampY && mouseY < this.bedlampY2) {
        //Toggles between the light being on and off
        bedlamplight.on = !bedlamplight.on;
        //Play the SFX for the bed lamp if it being turned on or off
        bedlampSFX.play();
      }
    }
    //If the laptop is clicked, open up the login info
    if (mouseX > this.laptopX && mouseX < this.laptopX2) {
      if (mouseY > this.laptopY && mouseY < this.laptopY2) {
        //Change states when the laptop is clicked
        state = "LaptopLogIn";
        //Stop the rain SFX during this state
        rainSFX.stop();
      }
    }
    //If the left arrow is pressed switch to Room2
    if (mouseX > this.leftArrowX && mouseX < this.leftArrowX2) {
      if (mouseY > this.leftArrowY && mouseY < this.leftArrowY2) {
        //Change states when the left arrow is clicked
        state = "Room2";
      }
    }
    //If the right arrow is pressed switch to Room3
    if (mouseX > this.rightArrowX && mouseX < this.rightArrowX2) {
      if (mouseY > this.rightArrowY && mouseY < this.rightArrowY2) {
        //Change states when the left arrow is clicked
        state = "Room3";
      }
    }
    //If the pile of paper is clicked switch to a close up of the notes
    if (mouseX > this.PileX && mouseX < this.PileX2) {
      if (mouseY > this.PileY && mouseY < this.PileY2) {
        //Change states when the pile of paper is clicked
        state = "PaperShow";
        //Play the paperSFX
        paperSFX.play();
      }
    }
    //If the bed is clicked roll to ending
    if (task4Complete == true) { //if the tasks are all complete continue on
      if (mouseX > this.bedX && mouseX < this.bedX2) {
        if (mouseY > this.bedY && mouseY < this.bedY2) {
          //Change states to the ending
          state = "EndScene1";
        }
      }
    }
  }
}
