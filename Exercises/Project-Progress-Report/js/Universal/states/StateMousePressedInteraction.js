//Class for mouse pressed functionality
class StateMousePressedInteraction {
  constructor() {

  }

  //Activate the mouse pressed interactivity when...
  active() {
    //Constrain parameters
    let xc = constrain(mouseX, 0, canvasPosition.x);
    let yc = constrain(mouseY, 0, canvasPosition.y);
    //Generate a new food if pressed from the class
    let newtetraFin = new TetraFin(random(58, 1232), 50);
    //If the mouse is in the canvas and pressed display a new food, else do not.
    if (state == "Aquarium") {
      if (mouseX == xc) {
        if (mouseY == yc) {
          tetraFin.push(newtetraFin);
        }
      }
    }
  }
}
