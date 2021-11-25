//Class for the pretitle that displays before the title to activate the sound
class PreTitle extends Apartment {
  constructor(w, h, x, y) {
    //Rectangle to cover screen parameters
    //Call parameters from the super class
    super(w,h,x,y);
    //Fill
    this.r = 13;
    this.g = 10;
    this.b = 61;
    //Text saying "Press any key "
    //position
    this.textX = 640;
    this.textY = 360;
    //Text size
    this.textSize = 40;
    //Fill
    this.white = 255;
  }

  //Display the dark blue background
  display() {
    push();
    fill(this.r, this.g, this.b);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the text "Press any key "
  displayText() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.textSize);
    text('Press Any Key!', this.textX, this.textY);
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
