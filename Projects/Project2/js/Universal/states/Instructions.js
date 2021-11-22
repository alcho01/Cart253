//Class for the instructions
class Instructions extends Apartment {
  constructor(w, h, x, y, instructionsImage) {
    //Call parameters of super class
    super(w, h, x, y);
    //Image
    this.instructionsImage = instructionsImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.homeButtonX = 12;
    this.homeButtonX2 = 227;
    this.homeButtonY = 16;
    this.homeButtonY2 = 113;
  }

  //display the instructions
  display() {
    push();
    imageMode(CENTER);
    image(this.instructionsImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse functionality for the instructions page
  mouseClicked() {
    //if the home button is clicked go to the title screen
    if (mouseX > this.homeButtonX && mouseX < this.homeButtonX2) {
      if (mouseY > this.homeButtonY && mouseY < this.homeButtonY2) {
        state = "TitleScreen";
      }
    }
  }
}
