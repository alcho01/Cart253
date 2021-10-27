class Cityscape {

  constructor(x,y,cityscapeImage) {
    this.width = 1280;
    this.height = 720;
    //Position
    this.x = x;
    this.y = y;
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
