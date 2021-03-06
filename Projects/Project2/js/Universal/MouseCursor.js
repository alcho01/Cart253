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

  //Door
  //Dimension
    this.doorWidth = 350;
  //Position
    this.doorX = 445;
    this.doorY = 258;

  //Bag
  //Dimension
    this.bagWidth = 130;
  //Position
    this.bagX = 700;
    this.bagY = 500;

  //Door on room 4
  //Dimension
    this.room4DoorWidth = 350;
  //Position
    this.room4DoorX = 917;
    this.room4DoorY = 305;

  //Piano
  //Dimension
  this.pianoWidth = 400;
  //Position
  this.pianoX = 1083;
  this.pianoY = 488;
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
  //Display these mouse cursor events on room 3
  displayOnThree() {
    //dPhone is the distance between the mouse and the phone
    let dPhone = dist(mouseX, mouseY, phone.x, phone.y);
    //dDoor is the distance between the mouse and the door
    let dDoor = dist(mouseX, mouseY, this.doorX, this.doorY);
    //dBag is the distance between the mouse andd the bag
    let dBag = dist(mouseX, mouseY, this.bagX, this.bagY);

    if (dPhone < phone.width / 2) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    else if (dDoor < this.doorWidth /2 ) {
      cursor('http://www.rw-designer.com/cursor-view/146672.png');
    }
    else if (dBag < this.bagWidth /2 ) {
      cursor('http://www.rw-designer.com/cursor-view/166785.png');
    }
    else {
      cursor();
    }
  }

  //Display these mouse cursor events on room 4 entrance
  displayOnFourEntrance() {
    //dRoom4Door is the distance between the mouse and the door on room 4
    let dRoom4Door = dist(mouseX, mouseY, this.room4DoorX, this.room4DoorY);

    if (dRoom4Door < this.room4DoorWidth / 2) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    else {
      cursor();
    }
  }

  //Display these mouse cursor events on room 4
  displayOnFour() {
    //dPiano is the distance between the mouse and the piano
    let dPiano = dist(mouseX, mouseY, this.pianoX, this.pianoY);

    if (dPiano < this.pianoWidth / 2) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    else {
      cursor();
    }
  }
}
