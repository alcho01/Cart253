//Class that alternates between states
class StateShow {
  constructor() {

  }

  //Display whatever state it is
  display() {
    //Organize what states the simulation consists of...
    //The room the user begins on

    if (state == "MainRoom") {
      mainRoomState.display();
    }
    //If the laptop is pressed go to the log on screen
    else if (state == "LaptopLogIn") {
      laptopLogInState.display();
    }
    //If the username is correct overlay this screen to type the password
    else if (state == "PasswordState") {
      passwordlog.display();
      password.display();
    }
    //go to the laptop menu screen
    else if (state == "LaptopMenuScreen") {
      laptopmenu.display();
    }
    //from the laptop menu screen go to the app lofify
    else if (state == "LofifyScreen") {
      lofify.display();
    }
    //If atom app is pressed go to the atom screen
    else if (state == "AtomScreen") {
      atomMenuState.display();
    }
    //If the left arrow is pressed go to room 2
    else if (state == "Room2") {
      room2State.display();
    }
    //If the aquarium is pressed go to the aquarium screen
    else if (state == "Aquarium") {
      aquariumToggleState.display();
    }
    //If the user completes the aquarium task prompt this
    else if (state == "AquariumEnding") {
      aquariumEnding.display();
      aquariumSFX.stop();
    }
    //Open up the book
    else if (state == "OpenBook") {
      book.display();
    }
    //Open up the message
    else if (state == "PlantMessage") {
      phoneCodePaper.display();
    }
    //Open up the papers
    else if (state == "PaperShow") {
      paper.display();
    }
    //Take the head off of the bear
    else if (state == "BearHead") {
      bear.display();
    } else if (state == "Room3") {
      room3State.display();
    }
  }
}
