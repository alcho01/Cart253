//Class for room 3 state
class Room3State {
  constructor() {

  }

  //Display the required entities for this class
  display() {
    //Display the landscape for this room
    cityscape3.display();

    //Display the raindrops //Need a for loop for arrays. Call the class functions in the for loop to display the raindrops
    for (let i = 0; i < rainDrop.length; i++) {
      rainDrop[i].display();
      rainDrop[i].move();
    }

    //Display the clouds
    for (let i = 0; i < cloud.length; i++) {
      cloud[i].display();
      cloud[i].update();
    }

    //Display the room layout
    room3Layout.display();

    //Display the prerequisite warning
    prerequisite.displayOnThree();

    //Display the Arrow to switch between screens
    arrowleft.display();

    //Display the mouse cursor
    mousecursor.displayOnThree();
  }
}
