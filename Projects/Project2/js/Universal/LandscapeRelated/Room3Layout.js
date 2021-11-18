//Class for the room 3 layout
class Room3Layout extends Apartment{
  constructor(w, h, x, y, room3LayoutImage) {
    //Call the parameters from the super class
    super(w, h, x, y);
    //Image
    this.room3LayoutImage = room3LayoutImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Left Arrow
    this.leftArrowX = 14;
    this.leftArrowX2 = 114;
    this.leftArrowY = 611;
    this.leftArrowY2 = 715;
    //Phone
    this.phoneX = 830;
    this.phoneX2 = 889;
    this.phoneY = 515;
    this.phoneY2 = 547;
  }

  //Display the room 3 layout
  display() {
    push();
    imageMode(CENTER);
    image(this.room3LayoutImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse Functionality
  mouseClicked() {
    //If the left arrow is clicked switch to MainRoom
    if (mouseX > this.leftArrowX && mouseX < this.leftArrowX2) {
      if (mouseY > this.leftArrowY && mouseY < this.leftArrowY2) {
        //Change states when the left arrow is clicked
        state = "MainRoom";
      }
    }
    //If the phone is clicked switch to PhoneLogin state
    if (task3Availabe == false) {
    if (mouseX > this.phoneX && mouseX < this.phoneX2) {
      if(mouseY > this.phoneY && mouseY < this.phoneY2) {
        //Change state when the phone is clicked
        state = "PhoneLoginMenu";
        }
      }
    }
  }
}
