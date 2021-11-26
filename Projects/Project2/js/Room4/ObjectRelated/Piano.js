//Class for the piano that is displayed in room 4
class Piano {
  constructor(w, h, x, y, pianoImage, pianoHoverImage) {
    //Dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
    //Images
    this.pianoImage = pianoImage;
    this.pianoHoverImage = pianoHoverImage;
  }

  //Display the piano
  display() {
    push();
    imageMode(CENTER);
    image(this.pianoImage, this.x, this.y, this.width, this.height);
    pop();

    //Calculate the distance of the mouse and the piano
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.width / 2) {
      //If the mouse intersects with piano display pianoHoverImage
      imageMode(CENTER);
      image(this.pianoHoverImage, this.x, this.y, this.width, this.height);
    }
  }
}
