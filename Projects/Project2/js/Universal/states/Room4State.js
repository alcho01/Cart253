//Class for everything related to room 4
class Room4State {
  constructor () {

  }

  //Display the entities of room 4
  display() {

    //Display the layout
    room4Layout.display();

    //Display the piano
    piano.display();

    //Display the Arrow to switch rooms
    arrowleft.display();

    //Display the prerequisite
    prerequisite.displayOnFour();

    //Display the cursor
    mousecursor.displayOnFour();
  }
}
