//Class that displays the fooled message when start is clicked on the crossy app
class CrossyFooled extends Apartment {
  constructor(w, h, x, y, crossyFooledImage) {
  //Call the parameters from the super class
  super(w, h, x, y);
  //Image
  this.crossyFooledImage = crossyFooledImage;
  //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
  //Next Button
  this.nextButtonX = 771;
  this.nextButtonX2 = 1025;
  this.nextButtonY = 289;
  this.nextButtonY2 = 543;

  }

  //display the crossy fooled message
  display() {
    push();
    imageMode(CENTER);
    image(this.crossyFooledImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse clicked functionality for the crossy fooled screen
  mouseClicked() {
    //If the nextButton is clicked switch to quiz
    if (mouseX > this.nextButtonX && mouseX < this.nextButtonX2) {
      if (mouseY > this.nextButtonY && mouseY < this.nextButtonY2) {
        //Change states when the nextButton is clicked
        state = "CrossyQuizQuestion1";
      }
    }
  }
}
