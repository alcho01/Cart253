//Super class for all rooms and cityscapes
class Apartment {
  constructor(w, h, x, y) {
    //Dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
  }

  display() {
    //In the subclasses (Mainroom,Cityscape)
  }
}
