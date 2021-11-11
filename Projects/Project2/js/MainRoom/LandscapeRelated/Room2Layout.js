//The room on the left of the main room
class Room2Layout extends Apartment {
  constructor(w, h, x, y, room2LayoutImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w, h, x, y);
    //Image
    this.room2layoutImage = room2LayoutImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Arrow
    this.arrowX = 1170;
    this.arrowX2 = 1275;
    this.arrowY = 605;
    this.arrowY2 = 710;
    //Aquarium
    this.aquariumX = 686;
    this.aquariumX2 = 866;
    this.aquariumY = 400;
    this.aquariumY2 = 525;
  }

  //Display the room 2 layout
  display() {
    push();
    imageMode(CENTER);
    image(this.room2layoutImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse Function
  mouseClicked() {
    //If the arrow is clicked go to the main room
    if (mouseX > this.arrowX && mouseX < this.arrowX2) {
      if (mouseY > this.arrowY && mouseY < this.arrowY2) {
        state = "MainRoom";
      }
    }
    //If the aquarium is clicked go to the aquarium layout
    if (mouseX > this.aquariumX && mouseX < this.aquariumX2) {
      if (mouseY > this.aquariumY && mouseY < this.aquariumY2) {
        state = "Aquarium";
        //Stop the rain
        rainSFX.stop();
      }
    }
  }
}
