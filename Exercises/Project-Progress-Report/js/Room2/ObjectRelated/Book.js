//Class for the book in room 2
class Book extends Apartment {
  constructor(w,h,x,y,bookOpenImage) {
    //Takes parameters from parent class
    super(w,h,x,y);
    //Image
    this.bookOpenImage = bookOpenImage;

    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Close button
    this.closeButtonX = 0;
    this.closeButtonX2 = 230;
    this.closeButtonY = 0;
    this.closeButtonY2 = 100;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.bookOpenImage,this.x,this.y,this.width,this.height);
    pop();
  }

  mouseClicked() {
    if (mouseX > this.closeButtonX && mouseX < this.closeButtonX2) {
      if (mouseY > this.closeButtonY && mouseY < this.closeButtonY2) {
        state = "Room2";
      }
    }
  }
}
