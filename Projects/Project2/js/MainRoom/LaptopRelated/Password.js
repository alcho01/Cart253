//The class for the password which will be typed on the login info screen
class Password {

  constructor(x,y) {
    //position
    this.x = x;
    this.y = y;
    //colour (White)
    this.white = 255;
    //colour if correct password
    this.r = 0,
    this.g = 128,
    this.b = 255,
    //text indent from left
    this.indent = 40;
    //the text size
    this.size = 65;
  }

  //Display the text that is written by the user
  display() {
    push();
    if (password.inputIsCorrect()) {
      fill(this.r,this.g,this.b);
      state = 'LaptopMenuScreen'
    }
    else
    {
    fill(this.white);
  }
    textAlign(CENTER);
    textSize(this.size);
    text(passCurrentInput,this.indent,this.x,this.y);
    pop();
  }

  //If the password is correct return it true if not false
  inputIsCorrect() {
    if (passCurrentInput === passwordCode) {
      return true;
    }
    else
    {
      return false;
    }
  }
}
