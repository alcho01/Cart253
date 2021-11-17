//The bed lamp displaye in the main room
class BedLamp {
  constructor(w, h, x, y, bedlampImage, bedlamphoverImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //images
    this.bedlampImage = bedlampImage;
    this.bedlamphoverImage = bedlamphoverImage;
  }

  //Display the lamp
  display() {
    push();
    imageMode(CENTER);
    image(this.bedlampImage, this.x, this.y, this.width, this.height);
    pop();

    //Calculate the distance of the mouse and the "bedlampImage"
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.width / 2) {
      //If the mouse intersects with "bedlampImage" display "bedlamphoverImage"
      imageMode(CENTER);
      image(this.bedlamphoverImage, this.x, this.y, this.width, this.height);
    }
  }
}
