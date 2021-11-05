//The class for the laptop menu screen which is accessed after the username and password are correct
class LaptopMenu extends Apartment{

  constructor(w,h,x,y,laptopmenuImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //image
    this.laptopmenuImage = laptopmenuImage;
  }

  //Display the laptop menu screen
  display() {
    push();
    imageMode(CENTER);
    image(this.laptopmenuImage,this.x,this.y,this.width,this.height);
    pop();
  }

  //Mouse function
  mouseClicked() {
  //Stop the rain SFX during this state
    rainSFX.stop();
      if (mouseX > 5 && mouseX < 115) {
      if (mouseY > 10 && mouseY < 118) {
  //This is the current state it will be
        state = 'MainRoom'
  //Reset the usercurrentInput
        usercurrentInput = '';
  //Reset the passcurrentInput
        passcurrentInput = '';
  //Resume the rain sound upon pressing the button
        rainSFX.play();
      }
    }
  //If the lofify app is pressed apply the following sequence...
      if (mouseX > 5 && mouseX < 115) {
      if (mouseY > 120 && mouseY < 235) {
        state = 'LofifyScreen'
        }
      }
 //If the atom app is pressed apply the following sequence...
      if (mouseX > 5 && mouseX < 115) {
      if (mouseY > 248 && mouseY < 348) {
        state = 'AtomScreen'
      }
    }
  }
}
