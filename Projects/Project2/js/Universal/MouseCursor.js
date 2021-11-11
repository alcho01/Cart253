//Class for the mouse cursor
class MouseCursor {
  constructor() {
  //
  }

  //Display the mouse cursor
  display() {
    //Create variables for the distance between the mouse and each object's X and Y axis.
    let dBed = dist(mouseX, mouseY, bed.x, bed.y);

    let dLamp = dist(mouseX, mouseY, bedlamp.x, bedlamp.y);

    let dLaptop = dist(mouseX, mouseY, laptop.x, laptop.y);

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
    } else {
      cursor();
    }
  }

  //Display these mouse cursor events on room 2
  displayOnTwo() {
    //daquarium is the distance of the aquarium
    let dAquarium = dist(mouseX, mouseY, aquarium.x, aquarium.y);
    //dBook is the distance of the orange book
    let dBook = dist(mouseX, mouseY, book.x, book.y);

    if (dAquarium < aquarium.width / 2.5) {
      cursor("http://www.rw-designer.com/cursor-view/146672.png");
    }
    else if (dBook < book.width /2 ) {
      cursor('http://www.rw-designer.com/cursor-view/166785.png');
    }
     else {
      cursor();
    }
  }
}
