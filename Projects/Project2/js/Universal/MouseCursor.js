//Class for the mouse cursor
class MouseCursor {

  constructor() {
    //Nothing to call
  }

  //Display the mouse cursor
  display() {
      //Create variables for the distance between the mouse and each object's X and Y axis.
      let dbed = dist(mouseX,mouseY,bed.x,bed.y);

      let dlamp = dist(mouseX,mouseY,bedlamp.x,bedlamp.y);

      let dlaptop = dist(mouseX,mouseY,laptop.x,laptop.y);

      let daquarium = dist(mouseX,mouseY,aquarium.x,aquarium.y);

      //Cursor Settings
      //Dbed is distance of the bed lamp
      if (dbed < bed.height/4) {
        cursor('http://www.rw-designer.com/cursor-view/146672.png');
      }
      //Dlamp is distance of the bed lamp
      else if (dlamp < bedlamp.width/2) {
        cursor('http://www.rw-designer.com/cursor-view/146672.png');
      }
      //dlaptop is distance of the laptop
      else if (dlaptop < laptop.width/2) {
        cursor('http://www.rw-designer.com/cursor-view/146672.png');
      }
      //daquarium is distance of the aquarium
      else if (daquarium < aquarium.width/2) {
        cursor('http://www.rw-designer.com/cursor-view/146672.png');
      }
      else {
        cursor();
      }
    }
  }
