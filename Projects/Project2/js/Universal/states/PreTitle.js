//Class for the pretitle that displays before the title to activate the sound
class PreTitle extends Apartment {
  constructor(w, h, x, y, pretitleImage1, pretitleImage2) {
    //Call parameters from the super class
    super(w, h, x, y);
    //Images
    this.pretitleImage1 = pretitleImage1;
    this.pretitleImage2 = pretitleImage2;
  }

  //Display the lofi Pretitle
  display() {
    push();
    if (frameCount % 40 < 10/2) {
      image(this.pretitleImage1, this.x, this.y, this.width, this.height);
    }
    else if (frameCount % 60 < 10/2) {
      image(this.pretitleImage2, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //Switch states if the key is pressed
  keyPressed() {
    if (state == "PreTitle") {
      //Loop the rain SFX and play at title
      rainSFX.loop();
      //Play At Title and loop on title
      titleSong.play();
      titleSong.loop();
      state = "TitleScreen"
    }
  }
}
