//Class for the phone home screen which is displayed after correctly inputting the password
class PhoneHome extends Apartment{
  constructor(w, h, x, y, phoneHomeImage) {
    //Call parameters from super class
    super(w, h, x, y);
    //Image
    this.phoneHomeImage = phoneHomeImage;
  }

  //Display the phone home screen
  display() {
    push();
    imageMode(CENTER);
    image(this.phoneHomeImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
