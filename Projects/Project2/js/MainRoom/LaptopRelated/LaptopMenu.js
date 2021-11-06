//The class for the laptop menu screen which is accessed after the username and password are correct
class LaptopMenu extends Apartment{

  constructor(w,h,x,y,laptopmenuImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //image
    this.laptopmenuImage = laptopmenuImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Log out button
    this.logoutX = 5;
    this.logoutX2 = 115;
    this.logoutY = 10;
    this.logoutY2 = 118;
    //Lofify button
    this.lofifyX = 5;
    this.lofifyX2 = 115;
    this.lofifyY = 120;
    this.lofifyY2 = 235;
    //atom button
    this.atomX = 5;
    this.atomX2 = 115;
    this.atomY = 248;
    this.atomY2 = 348;
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
  //Log out button
    rainSFX.stop();
      if (mouseX > this.logoutX && mouseX < this.logoutX2) {
      if (mouseY > this.logoutY && mouseY < this.logoutY2) {
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
      if (mouseX > this.lofifyX && mouseX < this.lofifyX2) {
      if (mouseY > this.lofifyY && mouseY < this.lofifyY2) {
        state = 'LofifyScreen'
        }
      }
 //If the atom app is pressed apply the following sequence...
      if (mouseX > this.atomX && mouseX < this.atomX2) {
      if (mouseY > this.atomY && mouseY < this.atomY2) {
        state = 'AtomScreen'
      }
    }
  }
}
