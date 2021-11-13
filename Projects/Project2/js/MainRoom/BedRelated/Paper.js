//Class for the paper pile
class Paper extends Apartment {
  constructor(w, h, x, y, paperImage) {
    //Calls parameters from super class
    super(w, h, x, y);
    //Image
    this.paperImage = paperImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.exitX = 256;
    this.exitX2 = 384;
    this.exitY = 180;
    this.exitY2 = 256;
  }

  //Display the paper message
  display() {
    push();
    imageMode(CENTER);
    image(this.paperImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Exit button
  mouseClicked() {
    if (mouseX > this.exitX && mouseX < this.exitX2) {
      if (mouseY > this.exitY && mouseY < this.exitY2) {
        state = 'MainRoom';
      }
    }
  }
}
