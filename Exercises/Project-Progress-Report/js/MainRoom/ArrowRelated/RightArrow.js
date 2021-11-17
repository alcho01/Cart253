//The right navigational arrow
class RightArrow extends Arrow {
  constructor(w, h, x, y, arrowrightImage, arrowRhoverImage) {
    //Takes parameters from SuperClass "Arrow"
    super(w, h, y);
    //position
    this.x = x;
    //images
    this.arrowrightImage = arrowrightImage;
    this.arrowRhoverImage = arrowRhoverImage;
  }

  //Display the regular right arrow image
  display() {
    push();
    imageMode(CENTER);
    image(this.arrowrightImage, this.x, this.y, this.width, this.height);
    pop();

    //Calculate the distance of the mouse and the "arrowrightImage"
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.width / 2) {
      //If the mouse intersects with "arrowrightImage" display "arrowRhoverImage"
      imageMode(CENTER);
      image(this.arrowRhoverImage, this.x, this.y, this.width, this.height);
    }
  }
}
