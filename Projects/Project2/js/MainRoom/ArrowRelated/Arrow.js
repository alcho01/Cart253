//Super class for navigational arrows
class Arrow {
  constructor(w, h, y) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.y = y;
  }

  display() {
    //In the subclasses(RightArrow, LeftArrow)
  }
}
