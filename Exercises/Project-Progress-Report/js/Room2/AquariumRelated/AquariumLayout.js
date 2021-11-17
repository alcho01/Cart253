//Class for the aquarium layout which is displayed after clicking the aquarium in room 2
class AquariumLayout extends Apartment {
  constructor(w, h, x, y, aquariumLayoutImage, aquariumHelpImage) {
    //Takes parameters from SuperClass "Apartment" because they are the same
    super(w, h, x, y);
    //Image
    this.aquariumLayoutImage = aquariumLayoutImage;
    this.aquariumHelpImage = aquariumHelpImage;
    //AquariumHelpImage parameters
    //dimensions
    this.aquaHelpWidth = 250;
    this.aquaHelpHeight = 250;
    //position
    this.aquaHelpX = 1103;
    this.aquaHelpY = 535;
    //Switch between shown or not
    this.aquaHelpToggle = false;
    //Bottom Border dimensions/position/colour
    this.bottomWidth = 1280;
    this.bottomHeight = 120;
    this.bottomX = 0;
    this.bottomY = 660;
    this.bottomColour = 0;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Exit Button
    this.xButtonX = 0;
    this.xButtonX2 = 51;
    this.xButtonY = 0;
    this.xButtonY2 = 54;
    //Help Button
    this.helpButtonX = 1226;
    this.helpButtonY = 0;
    this.helpButtonWidth = 100;
  }

  //display the aquarium layout
  display() {
    push();
    imageMode(CENTER);
    image(this.aquariumLayoutImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the help box
  displayAquaHelp() {
    //Display if true else don't show
    if (this.aquaHelpToggle) {
      push();
      imageMode(CENTER);
      image(
        this.aquariumHelpImage,
        this.aquaHelpX,
        this.aquaHelpY,
        this.aquaHelpWidth,
        this.aquaHelpHeight
      );
      pop();
    }
  }

  //Display the bottom border
  displayAquaBottom() {
    push();
    noStroke();
    fill(this.bottomColour);
    rect(this.bottomX,this.bottomY,this.bottomWidth,this.bottomHeight);
    pop();
  }

  //Function for what happens when the mouse is over the question mark
  mouseOver() {
    //Calculate the distance between the mouse and question mark
    let d = dist(mouseX, mouseY, this.helpButtonX, this.helpButtonY);
    if (state == "Aquarium") {
      //If it intersects show the help box else do not
      if (d < this.helpButtonWidth / 2) {
        return (this.aquaHelpToggle = true);
      } else {
        return (this.aquaHelpToggle = false);
      }
    }
  }

  //Mouse functions
  mouseClicked() {
    //If the X button is clicked return to room 2
    if (mouseX > this.xButtonX && mouseX < this.xButtonX2) {
      if (mouseY > this.xButtonY && mouseY < this.xButtonY2) {
        state = "Room2";
        //Resume Rain sound
        rainSFX.play();
        //Stop Aquarium Sound
        aquariumSFX.stop();
      }
    }
  }
}
