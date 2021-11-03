//The room the game starts on
class Mainroom extends Apartment  {

  constructor(w,h,x,y,mainroomImage) {
  //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
  //Image
    this.mainroomImage = mainroomImage;
  }

  //Display the main room - the room the game starts on.
  display() {
    push();
    imageMode(CENTER);
    image(this.mainroomImage,this.x,this.y,this.width,this.height);
    pop();
  }

  //Mouse function
  mouseClicked() {
  //Play the SFX for the raindrops
    rainSFX.play();
  //If the bed lamp is clicked once it will turn on, if it is clicked twice it will turn off
      if (mouseX > 500 && mouseX < 545) {
      if (mouseY > 320 && mouseY < 405) {
  //Toggles between the light being on and off
        bedlamplight.on = !bedlamplight.on
  //Play the SFX for the bed lamp if it being turned on or off
        bedlampSFX.play();
        }
      }
  //If the laptop is clicked, open up the login info
      if (mouseX > 140 && mouseX < 215) {
      if (mouseY > 400 && mouseY < 500) {
  //Change states when the laptop is clicked
        state = 'LaptopLogIn'
  //Stop the rain SFX during this state
        rainSFX.stop();
        }
      }
    }
  }
