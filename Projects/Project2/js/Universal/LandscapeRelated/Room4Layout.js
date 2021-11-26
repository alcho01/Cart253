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
  }
}
