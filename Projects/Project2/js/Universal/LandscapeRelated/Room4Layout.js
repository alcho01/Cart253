//Class for the layout of room 4
class Room4Layout extends Apartment {
  constructor(w, h, x, y, room4LayoutImage) {
    //Call parameters from super class
    super(w, h, x, y);
    //Image
    this.room4LayoutImage = room4LayoutImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Left Arrow
    this.leftArrowX = 14;
    this.leftArrowX2 = 114;
    this.leftArrowY = 611;
    this.leftArrowY2 = 715;
    //piano
    this.pianoX = 842;
    this.pianoX2 = 1268;
    this.pianoY = 320;
    this.pianoY2 = 655;
  }

  //Display the layout
  display() {
    push();
    imageMode(CENTER);
    image(this.room4LayoutImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse functionality
  mouseClicked() {
    //If the left arrow is clicked switch to Room 4 entrance
    if (mouseX > this.leftArrowX && mouseX < this.leftArrowX2) {
      if (mouseY > this.leftArrowY && mouseY < this.leftArrowY2) {
        //Change states when the left arrow is clicked
        state = "Room4Entrance";
      }
    }
    //If the piano is clicked switch to the piano keyboard
    if (task3Complete == true) { //turn to true after
      if (noteSheetObtained == true) { //turn to true after
        if (mouseX > this.pianoX && mouseX < this.pianoX2) {
          if (mouseY > this.pianoY && mouseY < this.pianoY2) {
            //stop the rain
            rainSFX.stop();
            //stop the songs
            song1.stop();
            song2.stop();
            song3.stop();
            song4.stop();
            song5.stop();
            song6.stop();
            //Change states when the piano is clicked
            state = "PianoKeyboard";
          }
        }
      }
    }
  }
}
