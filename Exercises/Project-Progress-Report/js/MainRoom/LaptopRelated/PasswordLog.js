//After the username is correct this screen will pop up
class PasswordLog extends Apartment {
  constructor(w, h, x, y, passwordlogImage) {
    //takes parameters from parent class
    super(w, h, x, y);
    //image
    this.passwordlogImage = passwordlogImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.sleepbuttonX = 600;
    this.sleepbuttonX2 = 680;
    this.sleepbuttonY = 550;
    this.sleepbuttonY2 = 640;
  }

  //Display the passwordlog screen
  display() {
    push();
    imageMode(CENTER);
    image(this.passwordlogImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse function
  mouseClicked() {
    //If the Sleep button is pressed, return to the MainRoom
    if (mouseX > this.sleepbuttonX && mouseX < this.sleepbuttonX2) {
      if (mouseY > this.sleepbuttonY && mouseY < this.sleepbuttonY2) {
        //This is the current state it will be
        state = "MainRoom";
        //Reset the usercurrentInput
        userCurrentInput = "";
        //Reset the passcurrentInput
        passCurrentInput = "";
        //Resume the rain sound upon pressing the button
        rainSFX.play();
      }
    }
  }
}
