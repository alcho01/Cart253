//Class for the mouse clicked interaction
class StateMouseInteraction {
  constructor() {

  }

  //Activate the mouse clicked interaction based on what state it is in
  active() {
    //If the state is 'MainRoom' do the following orders
    if (state == "MainRoom") {
      mainroom.mouseClicked();
    }
    //username state
    if (state == "LaptopLogIn") {
      //Return the cursor to the default
      cursor();
      laptoploginfo.mouseClicked();
    }
    //password state
    if (state == "PasswordState") {
      passwordlog.mouseClicked();
    }
    //If the Log out button is pressed on the laptop menu screen do the following sequence...
    if (state == "LaptopMenuScreen") {
      laptopmenu.mouseClicked();
    }
    //Functionality with mouse clicked on the lofify screen
    if (state == "LofifyScreen") {
      lofify.mouseClicked();
    }
    //Functionality with mouse clicked on the atom screen
    if (state == "AtomScreen") {
      atom.mouseClicked();
    }
    //Room 2 mouse functionality
    if (state == "Room2") {
      room2Layout.mouseClicked();
    }
    //Aquarium mouse functionality
    if (state == "Aquarium") {
      //Return the cursor to the default
      cursor();
      aquariumLayout.mouseClicked();
    }
    //AquariumEnding mouse functionality
    if (state == "AquariumEnding") {
      aquariumEnding.mouseClicked();
    }
    //To close the book
    if (state == "OpenBook") {
      cursor();
      book.mouseClicked();
    }
    //To close the phonecodepaper
    if (state == "PlantMessage") {
      phoneCodePaper.mouseClicked();
    }
    //To close the paper messages
    if (state == "PaperShow") {
      cursor();
      paper.mouseClicked();
    }
    //To get out of the bear body
    if (state == "BearHead") {
      cursor();
      bear.mouseClicked();
    }
    //Room 3 mouse functionality
    if (state == "Room3") {
      room3Layout.mouseClicked();
    }
  }
}
