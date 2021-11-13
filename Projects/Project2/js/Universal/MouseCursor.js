//Class for the mouse cursor
class MouseCursor {
  constructor() {

  //stack of papers beside bed
  //Dimension
    this.paperStackWidth = 60;
  //Position
    this.paperStackX = 870;
    this.paperStackY = 573;

  //Orange Book
  //Dimension
    this.orangeBookWidth = 50;
  //Position
    this.orangeBookX = 848;
    this.orangeBookY = 120;

  //Teddy Bear
  //Dimension
    this.bearWidth = 120;
  //Position
    this.bearX = 1112;
    this.bearY = 440;
  }

  //Display the mouse cursor
  display() {
    //Create variables for the distance between the mouse and each object's X and Y axis.
    let dBed = dist(mouseX, mouseY, bed.x, bed.y);

    let dLamp = dist(mouseX, mouseY, bedlamp.x, bedlamp.y);

    let dLaptop = dist(mouseX, mouseY, laptop.x, laptop.y);

    let dPaperStack = dist(mouseX, mouseY, this.paperStackX,this.paperStackY);

    //Cursor Settings
    //Dbed is distance of the bed lamp
    if (dBed < bed.height / 4) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    //Dlamp is distance of the bed lamp
    else if (dLamp < bedlamp.width / 2) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    //dlaptop is distance of the laptop
    else if (dLaptop < laptop.width / 2) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    //dpaperstack is distance of the paper stack
    else if (dPaperStack < this.paperStackWidth / 2) {
      cursor('http://www.rw-designer.com/cursor-view/166785.png');
    }
      else {
      cursor();
    }
  }

  //Display these mouse cursor events on room 2
  displayOnTwo() {
    //daquarium is the distance of the aquarium and the mouse
    let dAquarium = dist(mouseX, mouseY, aquarium.x, aquarium.y);
    //dBook is the distance of the orange book and the mouse
    let dBook = dist(mouseX, mouseY, this.orangeBookX, this.orangeBookY);
    //dWoodFrame is the distance of the woodframe and the mouse
    let dWoodFrame = dist(mouseX, mouseY, this.woodFrameX, this.woodFrameY);
    //dBear is the distance of the bear and the mouse
    let dBear = dist(mouseX, mouseY, this.bearX, this.bearY);

    if (dAquarium < aquarium.width / 2.5) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    else if (dBook < this.orangeBookWidth /2 ) {
      cursor('http://www.rw-designer.com/cursor-view/166785.png');
    }
    else if (dBear < this.bearWidth /2 ) {
      cursor('http://www.rw-designer.com/cursor-view/166785.png');
    }
     else {
      cursor();
    }
  }
}
