//Class for the Sudoku which appears after properly entering the line of code
class Sudoku {
  constructor(w, h, x, y, sudokuImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
    //Image
    this.sudokuImage = sudokuImage;
  }

  //Display the image
  display() {
    push();
    imageMode(CENTER);
    image(this.sudokuImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
