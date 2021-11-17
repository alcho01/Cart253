//Class for the phone displayed in the third room
class Phone {
  constructor(w, h, x, y, phoneImage, phoneHoverImage) {
    //Dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
    //Images
    this.phoneImage = phoneImage;
    this.phoneHoverImage = phoneHoverImage;
  }

  display() {
    push()
    imageMode(CENTER);
    image(this.phoneImage, this.x, this.y, this.width, this.height);
    pop();
    //Calculate the distance between the mouse and the phone's x and y axis
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.width / 2) {
      //If the mouse intersects with the phone display the hovered image
      push();
      imageMode(CENTER);
      image(this.phoneHoverImage, this.x, this.y, this.width, this.height);
      pop();
    }
  }
}
