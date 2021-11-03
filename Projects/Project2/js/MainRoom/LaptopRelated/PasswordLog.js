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

  //Mouse function
  mouseClicked() {
 //If the Sleep button is pressed, return to the MainRoom
    if (mouseX > 600 && mouseX < 680) {
    if (mouseY > 550 && mouseY < 640) {
 //This is the current state it will be
      state = 'MainRoom'
 //Reset the usercurrentInput
      usercurrentInput = '';
 //Reset the passcurrentInput
      passcurrentInput = '';
 //Resume the rain sound upon pressing the button
      rainSFX.play();
      }
    }
  }
}
