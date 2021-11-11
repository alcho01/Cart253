//The cityscape that occurs when the state is under room2.
class Cityscape2 extends Apartment {
  constructor(w, h, x, y, cityscape2Image) {
    //Takes parameters from SuperClass "Apartment"
    super(w, h, x, y);
    //Image
    this.cityscape2Image = cityscape2Image;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.cityscape2Image, this.x, this.y, this.width, this.height);
    pop();
  }
}
