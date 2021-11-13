//Class for the teddy bear
class Bear extends Apartment{
  constructor(w, h, x, y, bearImage) {
    //Call parameters from super class
    super(w, h, x, y,);
    //Image
    this.bearImage = bearImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Hide Button
    this.hideX = 14;
    this.hideX2 = 180;
    this.hideY = 17;
    this.hideY2 = 84;
  }

  //Display the bear insides
  display() {
    push();
    imageMode(CENTER);
    image(this.bearImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse functionality
  mouseClicked() {
    //If the hide button is clicked go back to room 2
    if (mouseX > this.hideX && mouseX < this.hideX2) {
      if (mouseY > this.hideY && mouseY < this.hideY2) {
        state = "Room2";
      }
    }
  }
}
