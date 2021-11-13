//The room the game starts on
class Mainroom extends Apartment {
  constructor(w, h, x, y, mainroomImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w, h, x, y);
    //Image
    this.mainroomImage = mainroomImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Bed lamp
    this.bedlampX = 500;
    this.bedlampX2 = 545;
    this.bedlampY = 320;
    this.bedlampY2 = 405;
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
    //Paper pile
    this.PileX = 849;
    this.PileX2 = 892;
    this.PileY = 541;
    this.PileY2 = 600;
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
    //If the pile of paper is clicked switch to a close up of the notes
    if (mouseX > this.PileX && mouseX < this.PileX2) {
      if (mouseY > this.PileY && mouseY < this.PileY2) {
        //Change states when the pile of paper is clicked
        state = "PaperShow";
        //Play the paperSFX
        paperSFX.play();
      }
    }
  }
}
