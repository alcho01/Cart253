//After the username is correct this screen will pop up
class PasswordLog extends Apartment {

  constructor(w,h,x,y,passwordlogImage) {
    //takes parameters from parent class
    super(w,h,x,y);
    //image
    this.passwordlogImage = passwordlogImage;
  }

  //Display the passwordlog screen
  display() {
    push();
    imageMode(CENTER);
    image(this.passwordlogImage,this.x,this.y,this.width,this.height);
    pop();
  }
}
