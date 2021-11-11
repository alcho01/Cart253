//Class for the coffee
class Coffee {
  constructor(w, h, x, y, coffeeImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //Image
    this.coffeeImage = coffeeImage;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.coffeeImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
