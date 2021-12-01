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
    //Orange book
    this.bookClosedX = 836;
    this.bookClosedX2 = 861;
    this.bookClosedY = 73;
    this.bookClosedY2 = 131;
    //Purple flower pot
    this.PotX = 922;
    this.PotX2 = 954;
    this.PotY = 210;
    this.PotY2 = 236;
    //Bear head
    this.bearX = 1047;
    this.bearX2 = 1172;
    this.bearY = 380;
    this.bearY2 = 487;
    //Poster
    this.posterX = 81;
    this.posterX2 = 240;
    this.posterY = 15;
    this.posterY2 = 203;

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
    if (task2Availabe == true) {
    if (mouseX > this.aquariumX && mouseX < this.aquariumX2) {
      if (mouseY > this.aquariumY && mouseY < this.aquariumY2) {
        state = "Aquarium";
        //Play the Aquarium sound and loop
        aquariumSFX.play();
        //Loop the aquariumSFX
        aquariumSFX.loop();
        //Stop the rain
        rainSFX.stop();
        }
      }
    }
    //If the orange book is clicked open it up
     if (mouseX > this.bookClosedX && mouseX < this.bookClosedX2) {
      if (mouseY > this.bookClosedY && mouseY < this.bookClosedY2) {
        state = 'OpenBook';
        //Play the book SFX
        bookSFX.play();
      }
    }
    //Click the purple pot to display the hidden message
    if (mouseX > this.PotX && mouseX < this.PotX2) {
      if (mouseY > this.PotY && mouseY < this.PotY2) {
        state = 'PlantMessage';
      }
    }
    //If the head of the bear is clicked take it off
    if (mouseX > this.bearX && mouseX < this.bearX2) {
      if(mouseY > this.bearY && mouseY < this.bearY2) {
        state = "BearHead";
        //Play the thump SFX
        thumpSFX.play();
      }
    }
    //If the game over poster is clicked, trigger the alternative ending
    if (mouseX > this.posterX && mouseX < this.posterX2) {
      if(mouseY > this.posterY && mouseY < this.posterY2) {
        state = "AltEnd1";
      }
    }
  }
}
