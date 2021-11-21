//Class for the crossy menu which displays after the crossy app is pressed
class CrossyMenu extends Apartment{
  constructor(w, h, x, y, crossyMenuImage) {
    //Call the parameters from the super class
    super(w, h, x, y);
    //Image
    this.crossyMenuImage = crossyMenuImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Exit Button
    this.exitButtonX = 34;
    this.exitButtonX2 = 372;
    this.exitButtonY = 247;
    this.exitButtonY2 = 400;
    //Help Button
    this.helpButtonX = 917;
    this.helpButtonX2 = 1257;
    this.helpButtonY = 247;
    this.helpButtonY2 = 400;
    //Start Button
    this.startButtonX = 407;
    this.startButtonX2 = 885;
    this.startButtonY = 247;
    this.startButtonY2 = 400;
  }

  //Display the title screen for crossy
  display() {
    push();
    imageMode(CENTER);
    image(this.crossyMenuImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse clicked functionality for the crossy menu
  mouseClicked() {
    //If the exitButton is clicked switch to phone home
    if (mouseX > this.exitButtonX && mouseX < this.exitButtonX2) {
      if (mouseY > this.exitButtonY && mouseY < this.exitButtonY2) {
        //Change states when the exitButton is clicked
        state = "PhoneHomeScreen";
      }
    }
    //If the helpButton is clicked switch to crossy help screen
    if (mouseX > this.helpButtonX && mouseX < this.helpButtonX2) {
      if (mouseY > this.helpButtonY && mouseY < this.helpButtonY2) {
        state = "CrossyHelp";
      }
    }
    //If the startButton is clicked switch to crossy fooled screen
    if (mouseX > this.startButtonX && mouseX < this.startButtonX2) {
      if (mouseY > this.startButtonY && mouseY < this.startButtonY2) {
        state = "CrossyFooled";
      }
    }
  }
}
