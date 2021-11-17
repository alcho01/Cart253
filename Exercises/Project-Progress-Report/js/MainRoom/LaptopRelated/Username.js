//The class for the username which will be typed on the login info screen
class Username {
  constructor(x, y) {
    //position
    this.x = x;
    this.y = y;
    //colour (White)
    this.white = 255;
    //colour if correct username
    (this.r = 0),
      (this.g = 128),
      (this.b = 255),
      //text indent from left
      (this.indent = 40);
    //the text size
    this.size = 65;
  }

  //Display the text that is written by the user
  display() {
    push();
    if (username.inputIsCorrect()) {
      fill(this.r, this.g, this.b);
      state = "PasswordState";
      //Call the password state here
    } else {
      fill(this.white);
    }
    textAlign(CENTER);
    textSize(this.size);
    text(userCurrentInput, this.indent, this.x, this.y);
    pop();
  }

  //If the username is correct return it true if not false
  inputIsCorrect() {
    if (userCurrentInput === usernameCode) {
      return true;
    } else {
      return false;
    }
  }
}
