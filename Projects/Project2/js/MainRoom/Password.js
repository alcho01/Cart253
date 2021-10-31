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
    fill(this.white);
    textAlign(CENTER);
    textSize(this.size);
    text(passcurrentInput,this.indent,this.x,this.y);
    pop();
  }
}
