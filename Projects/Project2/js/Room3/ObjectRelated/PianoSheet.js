//Class for the piano sheet which is hidden behind the hanging fish and can only be completed after task 3
class PianoSheet extends Apartment{
  constructor(w, h, x, y, pianoSheetImage) {
  //Call the parameters from the super class
  super(w, h, x, y);
  //Image
  this.pianoSheetImage = pianoSheetImage;
  //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
  //ExitButton
  this.exitX = 1215;
  this.exitX2 = 1284;
  this.exitY = 0;
  this.exitY2 = 41;
}

  //Display the piano sheet
  display() {
  push();
  imageMode(CENTER);
  image(this.pianoSheetImage, this.x, this.y, this.width, this.height);
  pop();
  }

  //to close the piano sheet
  mouseClicked() {
    //If the exit button is clicked switch to Room 3
    if (mouseX > this.exitX && mouseX < this.exitX2) {
      if (mouseY > this.exitY && mouseY < this.exitY2) {
        //Change states when the exit button is clicked
        state = "Room3";
      }
    }
  }
}
