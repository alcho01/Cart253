//Class for the Laptop Login info when it is under the state of LaptopLogIn
//I extended to the Apartment because they have similar dimensions and position
class LaptopLogin extends Apartment {

  constructor(w,h,x,y,laptoploginfoImage) {
    //takes the parameters from the parent class
    super(w,h,x,y);
    //image
    this.laptoploginfoImage = laptoploginfoImage;
  }

  //Display the Laptop Login info when it is under the state of LaptopLogIn
  display() {
    push();
    imageMode(CENTER);
    image(this.laptoploginfoImage,this.x,this.y,this.width,this.height);
    pop();
  }

//Mouse function
  mouseClicked() {
 //If the Sleep button is pressed, return to the MainRoom
    if (mouseX > 600 && mouseX < 680) {
    if (mouseY > 550 && mouseY < 640) {
 //This is the current state it will be
      state = 'MainRoom'
 //Reset the usercurrentInput
      usercurrentInput = '';
 //Reset the currentInput
      passcurrentInput = '';
 //Resume the rain sound upon pressing the button
      rainSFX.play();
      }
    }
  }
}
