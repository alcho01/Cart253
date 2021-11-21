//Class for the bag note which is found when clicking on the bag in room 3
class BagNote extends Apartment {
  constructor(w, h, x, y, bagNoteImage) {
    //Call parameters from super class
    super(w, h, x, y);
    //Image
    this.bagNoteImage = bagNoteImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Hide Button
    this.hideButtonX = 12;
    this.hideButtonX2 = 225;
    this.hideButtonY = 12;
    this.hideButtonY2 = 90;
  }

  //Display the bag note
  display() {
    push();
    imageMode(CENTER);
    image(this.bagNoteImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse clicked interactivity for the bag note
  mouseClicked() {
    //If the HideButton is clicked return to room3
    if (mouseX > this.hideButtonX && mouseX < this.hideButtonX2) {
      if (mouseY > this.hideButtonY && mouseY < this.hideButtonY2) {
        state = "Room3";
      }
    }
  }
}
