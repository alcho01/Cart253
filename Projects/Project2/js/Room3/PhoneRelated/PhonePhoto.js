//Class for the phone photo which is displayed when the photo application is clicked
class PhonePhoto extends Apartment {
  constructor(w, h, x, y, phonePhotoImage){
    //Call the parameters from the superclass
    super(w, h, x, y);
    //Image
    this.phonePhotoImage = phonePhotoImage;

    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //HomeButton
    this.homeButtonX = 615;
    this.homeButtonX2 = 678;
    this.homeButtonY = 636;
    this.homeButtonY2 = 702;
  }

  //display the photo ablum app
  display() {
    push();
    imageMode(CENTER);
    image(this.phonePhotoImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse functionality for photo app screen
  mouseClicked() {
    //If the HomeButton is clicked switch to PhoneHome
    if (mouseX > this.homeButtonX && mouseX < this.homeButtonX2) {
      if (mouseY > this.homeButtonY && mouseY < this.homeButtonY2) {
        state = "PhoneHomeScreen";
      }
    }
  }
}
