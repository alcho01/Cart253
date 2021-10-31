//The class for the lofify menu screen which is accessed after the user presses the lofify app
class Lofify extends Apartment{

  constructor(w,h,x,y,lofifyImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //image
    this.lofifyImage = lofifyImage;
  }

  //Display the lofify screen
  display() {
    push();
    imageMode(CENTER);
    image(this.lofifyImage,this.x,this.y,this.width,this.height);
    pop();
  }
}
