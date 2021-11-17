//The class for AtomText which will be typed on the Atom app screen
class AtomText {
  constructor(x, y) {
    //position
    this.x = x;
    this.y = y;
    //colour (white)
    this.white = 255;
    //Colour if Correct
    this.r = 50;
    this.g = 163;
    this.b = 2;
    //Indent
    this.indent = 40;
    //Text size
    this.size = 15;
  }

  display() {
    push();
    //If correct fill it this colour
    if (atomText.inputIsCorrect()) {
      task1Complete = true;
      task2Availabe = true;
      fill(this.r, this.g, this.b);
      sudoku.display();
    } else {
      //fill it normally
      fill(this.white);
    }
    textAlign(CENTER);
    textSize(this.size);
    text(atomCurrentInput, this.x, this.y);
    pop();
  }

  //If the input is correct return it true if not false
  inputIsCorrect() {
    if (atomCurrentInput === atomCode) {
      return true;
    } else {
      return false;
    }
  }
}
