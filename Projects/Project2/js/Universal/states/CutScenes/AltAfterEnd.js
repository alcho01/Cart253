//Class that has the final scene that displays after the alternative ending
class AltAfterEnd extends Apartment {
  constructor(w, h, x, y, afterAltEndImage1, afterAltEndImage2, afterAltEndImage3, afterAltEndImage4) {
    //Call parameters from super class
    super(w, h, x, y);
    //Images
    this.afterAltEndImage1 = afterAltEndImage1;
    this.afterAltEndImage2 = afterAltEndImage2;
    this.afterAltEndImage3 = afterAltEndImage3;
    this.afterAltEndImage4 = afterAltEndImage4;
  }

   //Display this after the alternative ending to tell the user it is the bad ending.
   display() {
     push();
     imageMode(CENTER);

     if (frameCount % 60 < 15/2) {
       image(this.afterAltEndImage1, this.x, this.y, this.width, this.height);
     }
     else if (frameCount % 40 < 15/2) {
       image(this.afterAltEndImage2, this.x, this.y, this.width, this.height);
     }
     else if (frameCount % 30 < 15/2) {
       image(this.afterAltEndImage3, this.x, this.y, this.width, this.height);
     }
     else if (frameCount % 15 < 15/2) {
       image(this.afterAltEndImage4, this.x, this.y, this.width, this.height);

     pop();
    }
  }

  //Return to title screen
  keyPressed() {
    state = "TitleScreen";
    //Play At Title and loop on title
    titleSong.play();
    titleSong.loop();
    //Stop all current songs
     song1.stop();
     song2.stop();
     song3.stop();
     song4.stop();
     song5.stop();
     song6.stop();
  }
}
