//Class for the aquarium
class Aquarium {
  constructor(w, h, x, y, aquariumImage, aquariumHoverImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //images
    this.aquariumImage = aquariumImage;
    this.aquariumHoverImage = aquariumHoverImage;
  }

  //Display the aquarium
  display() {
    push();
    imageMode(CENTER);
    image(this.aquariumImage, this.x, this.y, this.width, this.height);
    pop();
    //Calculate the distance between the mouse and the aquarium's x and y axis
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.width / 2.5) {
      //If the mouse intersects with the aquarium display the hovered image
      push();
      imageMode(CENTER);
      image(this.aquariumHoverImage, this.x, this.y, this.width, this.height);
      pop();
    }
  }
}
