class Cityscape extends Apartment {

  constructor(w,h,x,y,cityscapeImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //Image
    this.cityscapeImage = cityscapeImage;
  }

  //Display the main cityscape - the cityscape the game starts on.
  display() {
    push();
    imageMode(CENTER);
    image(this.cityscapeImage,this.x,this.y,this.width,this.height);
    pop();
  }

}
