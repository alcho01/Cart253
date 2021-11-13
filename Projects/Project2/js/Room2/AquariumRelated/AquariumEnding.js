//Class for the end screen of the aquarium minigame
class AquariumEnding extends Apartment{
  constructor(w, h, x, y, aquariumEndImage, aquariumEndClickImage) {
    //Takes the parameters from the parent class Apartment. They contain the same parameters.
    super(w,h,x,y);
    //Images
    this.aquariumEndImage = aquariumEndImage;
    this.aquariumEndClickImage = aquariumEndClickImage;
    this.currentImage = aquariumEndImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Exit button
    this.exitX = 12;
    this.exitX2 = 86;
    this.exitY = 15;
    this.exitY2 = 90;
    //Key
    this.keyX = 418;
    this.keyX2 = 867;
    this.keyY = 259;
    this.keyY2 = 540;
  }

  //Display the end screen
  display() {
    push();
    imageMode(CENTER);
    image(this.currentImage,this.x,this.y,this.width,this.height);
    pop();
  }

  mouseClicked() {
    //If the X button is clicked return to room 2
    if (mouseX > this.exitX && mouseX < this.exitX2) {
      if (mouseY > this.exitY && mouseY < this.exitY2) {
        state = "Room2";
        //Stop the aquarium sound
        aquariumSFX.stop();
        //Resume the Rain
        rainSFX.play();
      }
    }
    //If the Key is clicked make the rectangle blank
    if (mouseX > this.keyX && mouseX < this.keyX2) {
      if (mouseY > this.keyY && mouseY < this.keyY2) {
        this.currentImage = aquariumEndClickImage;
      }
    }
  }
}
