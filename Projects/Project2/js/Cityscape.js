class Cityscape extends Apartment {

  constructor(w,h,x,y,cityscapeImage) {
    super(w,h,x,y);
    //Image
    this.cityscapeImage = cityscapeImage;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.cityscapeImage,this.x,this.y,this.width,this.height);
    pop();
  }

}
