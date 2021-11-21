//Class for the phone home screen which is displayed after correctly inputting the password
class PhoneHome extends Apartment{
  constructor(w, h, x, y, phoneHomeImage) {
    //Call parameters from super class
    super(w, h, x, y);
    //Image
    this.phoneHomeImage = phoneHomeImage;

    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Power Button
    this.powerButtonX = 850;
    this.powerButtonX2 = 875;
    this.powerButtonY = 67;
    this.powerButtonY2 = 157;

    //Photo Application
    this.photoAppX = 463;
    this.photoAppX2 = 542;
    this.photoAppY = 82;
    this.photoAppY2 = 160;

    //Note Application
    this.noteAppX = 577;
    this.noteAppX2 = 656;
    this.noteAppY = 82;
    this.noteAppY2 = 160;

    //Crossy Application
    this.crossyX = 688;
    this.crossyX2 = 767;
    this.crossyY = 82;
    this.crossyY2 = 160;
  }

  //Display the phone home screen
  display() {
    push();
    imageMode(CENTER);
    image(this.phoneHomeImage, this.x, this.y, this.width, this.height);
    pop();
  }

  mouseClicked() {
    //If the powerButton is clicked switch to Room 3
    if (mouseX > this.powerButtonX && mouseX < this.powerButtonX2) {
      if (mouseY > this.powerButtonY && mouseY < this.powerButtonY2) {
        //Change states when the powerButton is clicked
        state = "Room3";
        //Resume the rain if the power button is clicked
        rainSFX.play();
      }
    }
    //If the photo application is clicked switch to that state
    if (mouseX > this.photoAppX && mouseX < this.photoAppX2) {
      if (mouseY > this.photoAppY && mouseY < this.photoAppY2) {
      //Change states when the powerButton is clicked
      state = "PhonePhotoScreen";
    }
  }
    //If the photo application is clicked switch to that state
    if (mouseX > this.noteAppX && mouseX < this.noteAppX2) {
      if (mouseY > this.noteAppY && mouseY < this.noteAppY2) {
      //Change states when the powerButton is clicked
        state = "PhoneNoteScreen";
      }
    }
    //If the crossy application is clicked switch to that state
    if (mouseX > this.crossyX && mouseX < this.crossyX2) {
      if (mouseY > this.crossyY && mouseY < this.crossyY2) {
      //Change states when the powerButton is clicked
      state = "CrossyMenu";
      }
    }
  }
}
