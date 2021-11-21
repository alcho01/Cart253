//Class for the crossy help screen which displays after the help screen on the crossy menu is pressed
class CrossyHelp extends Apartment{
  constructor(w, h, x, y, crossyHelpImage) {
    //Call parameters from super class Apartment
    super(w, h, x, y);
    //Image
    this.crossyHelpImage = crossyHelpImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Home Button
    this.homeButtonX = 956;
    this.homeButtonX2 = 1040;
    this.homeButtonY = 602;
    this.homeButtonY2 = 659;
  }

  //display the help screen
  display() {
    push();
    imageMode(CENTER);
    image(this.crossyHelpImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //help screen mouse functionality
  mouseClicked() {
    //If the homeButton is clicked switch to crossy menu
    if (mouseX > this.homeButtonX && mouseX < this.homeButtonX2) {
      if (mouseY > this.homeButtonY && mouseY < this.homeButtonY2) {
        //Change states when the homeButton is clicked
        state = "CrossyMenu";
      }
    }
  }
}
