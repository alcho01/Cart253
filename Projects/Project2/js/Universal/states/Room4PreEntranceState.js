//Class that holds every element part of the room 4 pre entrance
class Room4PreEntranceState {
  constructor() {

  }

  //Display all required assets for room 4 pre entrance
  display() {
    //display the layout
    room4PreEntrance.display();

    //display the arrow to leave the room
    arrowleft.display();

    //Display the prerequisite warning
    prerequisite.displayOnFourEntrance();

    //Display the mousecursor
    mousecursor.displayOnFourEntrance();
  }
}
