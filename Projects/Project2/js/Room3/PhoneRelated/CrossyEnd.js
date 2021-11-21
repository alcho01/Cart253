//Class for the ending screen of the quiz
class CrossyEnd extends Apartment{
  constructor(w, h, x, y, crossyEndImage) {
    //Call Parameters from super class
    super(w, h, x, y);
    //Image
    this.crossyEndImage = crossyEndImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.exitButtonX = 1148;
    this.exitButtonX2 = 1272;
    this.exitButtonY = 582;
    this.exitButtonY2 = 709;
  }

  //Display the ending screen
  display() {
    push();
    imageMode(CENTER);
    image(this.crossyEndImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse Clicked functionality for ending screen of the quiz
  mouseClicked() {
    //If the exitButton is clicked go back to room3
    if (mouseX > this.exitButtonX && mouseX < this.exitButtonX2) {
      if (mouseY > this.exitButtonY && mouseY < this.exitButtonY2) {
        state = "Room3";
        rainSFX.play();
      }
    }
  }
}
