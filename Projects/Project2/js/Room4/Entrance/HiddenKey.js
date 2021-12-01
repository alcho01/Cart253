//Class for the hidden key found under a door mat
class HiddenKey extends Apartment{
  constructor(w, h, x, y, hiddenKeyImage, hiddenKeyTakenImage) {
    //call parameters from super class
    super(w, h, x, y);
    //Image
    this.hiddenKeyImage = hiddenKeyImage;
    this.hiddenKeyTakenImage = hiddenKeyTakenImage;
    this.currentImage = hiddenKeyImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Key
    this.keyX = 388;
    this.keyX2 = 898;
    this.keyY = 60;
    this.keyY2 = 250;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.currentImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse functionality
  mouseClicked() {
    //If the key is clicked switch back to the room 4 entrance and notify that it has been collected
    if (mouseX > this.keyX && mouseX < this.keyX2) {
      if (mouseY > this.keyY && mouseY < this.keyY2) {
        //Play the key jangled sfx
        keySFX.play();
          //User grabbed the key
          hiddenKeyObtained = true;
          //Switch to an empty box in case they click the mat again so they know they already took the key
          this.currentImage = hiddenKeyTakenImage;
          //Go back to the room
          state = "Room4Entrance"
        }
      }
    }
  }
