//The class for the lofify menu screen which is accessed after the user presses the lofify app
class Lofify extends Apartment {
  constructor(w, h, x, y, lofifyImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w, h, x, y);
    //image
    this.lofifyImage = lofifyImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Exit button
    this.exitbuttonX = 45;
    this.exitbuttonX2 = 275;
    this.exitbuttonY = 630;
    this.exitbuttonY2 = 705;

    //Stop songs
    this.song1X = 350;
    this.song1X2 = 1270;
    this.song1Y = 270;
    this.song1Y2 = 340;

    this.song2X = 350;
    this.song2X2 = 1270;
    this.song2Y = 345;
    this.song2Y2 = 412;

    this.song3X = 350;
    this.song3X2 = 1270;
    this.song3Y = 421;
    this.song3Y2 = 486;

    this.song4X = 350;
    this.song4X2 = 1270;
    this.song4Y = 497;
    this.song4Y2 = 562;

    this.song5X = 350;
    this.song5X2 = 1270;
    this.song5Y = 573;
    this.song5Y2 = 638;

    this.song6X = 350;
    this.song6X2 = 1270;
    this.song6Y = 646;
    this.song6Y2 = 712;

    //Play songs
    this.play1X = 350;
    this.play1X2 = 1270;
    this.play1Y = 270;
    this.play1Y2 = 340;

    this.play2X = 350;
    this.play2X2 = 1270;
    this.play2Y = 345;
    this.play2Y2 = 412;

    this.play3X = 350;
    this.play3X2 = 1270;
    this.play3Y = 421;
    this.play3Y2 = 486;

    this.play4X = 350;
    this.play4X2 = 1270;
    this.play4Y = 497;
    this.play4Y2 = 562;

    this.play5X = 350;
    this.play5X2 = 1270;
    this.play5Y = 573;
    this.play5Y2 = 638;

    this.play6X = 350;
    this.play6X2 = 1270;
    this.play6Y = 646;
    this.play6Y2 = 712;
  }

  //Display the lofify screen
  display() {
    push();
    imageMode(CENTER);
    image(this.lofifyImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse function
  mouseClicked() {
    //Button to stop for song1
    if (mouseX > this.song1X && mouseX < this.song1X2) {
      if (mouseY > this.song1Y && mouseY < this.song1Y2) {
        song1.stop();
      }
    }
    //Button to stop for song2
    if (mouseX > this.song2X && mouseX < this.song2X2) {
      if (mouseY > this.song2Y && mouseY < this.song2Y2) {
        song2.stop();
      }
    }
    //Button to stop for song3
    if (mouseX > this.song3X && mouseX < this.song3X2) {
      if (mouseY > this.song3Y && mouseY < this.song3Y2) {
        song3.stop();
      }
    }
    //Button to stop for song4
    if (mouseX > this.song4X && mouseX < this.song4X2) {
      if (mouseY > this.song4Y && mouseY < this.song4Y2) {
        song4.stop();
      }
    }
    //Button to stop for song5
    if (mouseX > this.song5X && mouseX < this.song5X2) {
      if (mouseY > this.song5Y && mouseY < this.song5Y2) {
        song5.stop();
      }
    }
    //Button to stop for song6
    if (mouseX > this.song6X && mouseX < this.song6X2) {
      if (mouseY > this.song6Y && mouseY < this.song6Y2) {
        song6.stop();
      }
    }
    //If the close window button is clicked return to the laptop menu screen
    if (mouseX > this.exitbuttonX && mouseX < this.exitbuttonX2) {
      if (mouseY > this.exitbuttonY && mouseY < this.exitbuttonY2) {
        state = "LaptopMenuScreen";
      }
    }
  }

  doubleClicked() {
    //Song 1
    if (mouseX > this.play1X && mouseX < this.play1X2) {
      if (mouseY > this.play1Y && mouseY < this.play1Y2) {
        //If double clicked play song1
        song1.play();
        song1.loop();
        //If double clicked stop all other songs except song 1
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
      }
    }

    //Song 2
    if (mouseX > this.play2X && mouseX < this.play2X2) {
      if (mouseY > this.play2Y && mouseY < this.play2Y2) {
        //If double clicked play song2
        song2.play();
        song2.loop();
        //If double clicked stop all other songs except song 2
        song1.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
      }
    }

    //Song 3
    if (mouseX > this.play3X && mouseX < this.play3X2) {
      if (mouseY > this.play3Y && mouseY < this.play3Y2) {
        //If double clicked play song3
        song3.play();
        song3.loop();
        //If double clicked stop all other songs except song 3
        song1.stop();
        song2.stop();
        song4.stop();
        song5.stop();
        song6.stop();
      }
    }

    //Song 4
    if (mouseX > this.play4X && mouseX < this.play4X2) {
      if (mouseY > this.play4Y && mouseY < this.play4Y2) {
        //If double clicked play song4
        song4.play();
        song4.loop();
        //If double clicked stop all other songs except song 4
        song1.stop();
        song2.stop();
        song3.stop();
        song5.stop();
        song6.stop();
      }
    }

    //Song 5
    if (mouseX > this.play5X && mouseX < this.play5X2) {
      if (mouseY > this.play5Y && mouseY < this.play5Y2) {
        //If double clicked play song5
        song5.play();
        song5.loop();
        //If double clicked stop all other songs except song 5
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song6.stop();
      }
    }

    //Song 6
    if (mouseX > this.play6X && mouseX < this.play6X2) {
      if (mouseY > this.play6Y && mouseY < this.play6Y2) {
        //If double clicked play song6
        song6.play();
        song6.loop();
        //If double clicked stop all other songs except song 6
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
      }
    }
  }
}
