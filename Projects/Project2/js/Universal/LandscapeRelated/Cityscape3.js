//Class for the third cityscape position
class Cityscape3 extends Apartment{
  constructor(w, h, x, y, cityscape3Image) {
    //Call the parameters from the super class
    super(w, h, x, y);
    //Image
    this.cityscape3Image = cityscape3Image;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.cityscape3Image, this.x, this.y, this.width, this.height);
    pop();
  }
}
