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
    //Bag
    this.bagX = 646;
    this.bagX2 = 753;
    this.bagY = 414;
    this.bagY2 = 577;
    //Door
    this.doorX = 314;
    this.doorX2 = 564;
    this.doorY = 0;
    this.doorY2 = 530;
    //hanging fish
    this.fishX = 681;
    this.fishX2 = 857;
    this.fishY = 36;
    this.fishY2 = 132;
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
    if (task3Availabe == true) { //Turn to true after testing
    if (mouseX > this.phoneX && mouseX < this.phoneX2) {
      if(mouseY > this.phoneY && mouseY < this.phoneY2) {
        //Change state when the phone is clicked
          state = "PhoneLoginMenu";
        }
      }
    }
    //If the bag is clicked switch to the BagNote state
    if (mouseX > this.bagX && mouseX < this.bagX2) {
      if (mouseY > this.bagY && mouseY < this.bagY2) {
        //Play the bag zipper SFX
        bagZipSFX.play();
        //Change state when the phone is clicked
          state = "BagNote";
        }
      }
    //If the key from task 2 is collected give permission to open the door
    if (doorUnlocked == true) {
    if (mouseX > this.doorX && mouseX < this.doorX2) {
      if (mouseY > this.doorY && mouseY < this.doorY2) {
        //Play door opening sound
        doorSFX.play();
        //Change state to the room 4 pre entrance
          state = "Room4Entrance";
        }
      }
    }
    //If task 3 is complete allow the hanging fish to be clicked
    if (hangingFish == true) {
    if (mouseX > this.fishX && mouseX < this.fishX2) {
      if (mouseY > this.fishY && mouseY < this.fishY2) {
        //Change state to the piano sheet
          state = "PianoSheet";
          //Note sheet obtained
          noteSheetObtained = true;
        }
      }
    }
  }
}
