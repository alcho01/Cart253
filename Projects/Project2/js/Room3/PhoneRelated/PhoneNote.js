//Class for the phone notes which is displayed when its application is clicked
class PhoneNote extends Apartment {
  constructor(w, h, x, y, phoneNoteImage) {
    //call the parameters from the super class
    super(w, h, x, y);
    //Image
    this.phoneNoteImage = phoneNoteImage;

    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //HomeButton
    this.homeButtonX = 615;
    this.homeButtonX2 = 678;
    this.homeButtonY = 636;
    this.homeButtonY2 = 702;
  }

  //Display the note app
  display() {
    push();
    imageMode(CENTER);
    image(this.phoneNoteImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse functionality for note app Screen
  mouseClicked() {
    //If the HomeButton is clicked switch to PhoneHome
    if (mouseX > this.homeButtonX && mouseX < this.homeButtonX2) {
      if (mouseY > this.homeButtonY && mouseY < this.homeButtonY2) {
        state = "PhoneHomeScreen";
      }
    }
  }
}
