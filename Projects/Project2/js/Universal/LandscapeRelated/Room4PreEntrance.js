//Class for the room 4 pre entrance
class Room4PreEntrance extends Apartment{
  constructor(w, h, x, y, room4PreEntranceImage) {
    //Call parameters from super class
    super(w, h, x, y);
    //Image
    this.room4PreEntranceImage = room4PreEntranceImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Left Arrow
    this.leftArrowX = 14;
    this.leftArrowX2 = 114;
    this.leftArrowY = 611;
    this.leftArrowY2 = 715;
    //Door mat
    this.doorMatX = 261;
    this.doorMatX2 = 486;
    this.doorMatY = 519;
    this.doorMatY2 = 604;
  }

  //Display the room 4 pre entrance
  display() {
    push();
    imageMode(CENTER);
    image(this.room4PreEntranceImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse Functionality
  mouseClicked() {
    //If the left arrow is clicked switch to Room3
    if (mouseX > this.leftArrowX && mouseX < this.leftArrowX2) {
      if (mouseY > this.leftArrowY && mouseY < this.leftArrowY2) {
        //Change states when the left arrow is clicked
        state = "Room3";
      }
    }
    //If the door mat is clicked collect the key to enter room 4
    if (mouseX > this.doorMatX && mouseX < this.doorMatX2) {
      if (mouseY > this.doorMatY && mouseY < this.doorMatY2) {
        //Change states when the door mat is pressed
        state = "HiddenKey";
      }
    }
  }
}
