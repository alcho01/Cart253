//The room the game starts on
class Mainroom extends Apartment  {

  constructor(w,h,x,y,mainroomImage) {
  //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
  //Image
    this.mainroomImage = mainroomImage;
  }

  //Display the main room - the room the game starts on.
  display() {
    push();
    imageMode(CENTER);
    image(this.mainroomImage,this.x,this.y,this.width,this.height);
    pop();
  }

}
