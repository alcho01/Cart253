//Class for the piano keyboard task which displays after the piano entity is clicked
class PianoKeyboard extends Apartment {
  constructor(w, h, x, y, pianoKeyboardImage) {
    //Call parameters from super class
    super(w, h, x, y);
    //Image
    this.pianoKeyboardImage = pianoKeyboardImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Exit Button
    this.exitX = 1215;
    this.exitX2 = 1284;
    this.exitY = 0;
    this.exitY2 = 41;
  }

  //Display the piano keyboard
  display() {
    push();
    imageMode(CENTER);
    image(this.pianoKeyboardImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse Functionality
  mouseClicked() {
    //If the exit button is clicked switch to Room 4
    if (mouseX > this.exitX && mouseX < this.exitX2) {
      if (mouseY > this.exitY && mouseY < this.exitY2) {
        //Change states when the exit button is clicked
        state = "Room4";
      }
    }
  }

  //key pressed functionality
  keyPressed() {

  }
}
