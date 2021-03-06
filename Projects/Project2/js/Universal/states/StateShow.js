//Class that alternates between states
class StateShow {
  constructor() {

  }

  //Display whatever state it is
  display() {
    //Organize what states the simulation consists of...
    //Pre title state
    if (state == "PreTitle") {
      preTitle.display();
    }
    //The title screen
    if (state == "TitleScreen") {
      titleState.display();
      titleState.displayLogo();
      titleState.displayRain();
      titleState.displayButtons();
    }
    //The instructions
    if (state == "Help") {
      instructions.display();
    }
    //The opening scene
    if (state == "OpeningScene") {
      openingScene.display();
      openingScene.displayDialogue();
    }
    //The room the user begins on
    if (state == "MainRoom") {
      titleSong.stop();
      mainRoomState.display();
    }
    //If the laptop is pressed go to the log on screen
    else if (state == "LaptopLogIn") {
      laptoploginfo.display();
      username.display();
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
      atom.display();
      atomText.display();
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
    //Room 3
    }
    else if (state == "Room3") {
      room3State.display();
    }
    //Open up to phone log in
    else if (state == "PhoneLoginMenu") {
      phoneLoginMenu.display();
      phoneLoginMenu.displayNums();
    }
    //Go to the phone home screen
    else if (state == "PhoneHomeScreen") {
      phoneHome.display();
    }
    //Go to the phone photo screen
    else if (state == "PhonePhotoScreen") {
      phonePhoto.display();
    }
    //Go to the phone Note screen
    else if (state == "PhoneNoteScreen") {
      phoneNote.display();
    }
    //Go to the crossy menu Screen
    else if (state == "CrossyMenu") {
      crossyMenu.display();
    }
    //Go to the crossy help screen
    else if (state == "CrossyHelp") {
      crossyHelp.display();
    }
    //Go to the crossy fooled Screen
    else if (state == "CrossyFooled") {
      crossyFooled.display();
    }
    //Go to the crossy quiz question 1
    else if (state == "CrossyQuizQuestion1") {
      crossyQuiz.display();
      crossyQuiz.displayQ1();
      crossyQuiz.displayAnswer1();
      crossyQuiz.displayNumber1();
    }
    //Go to the crossy quiz question 2
    else if (state == "CrossyQuizQuestion2") {
      crossyQuiz.display();
      crossyQuiz.displayQ2();
      crossyQuiz.displayAnswer2();
      crossyQuiz.displayNumber2();
    }
    //Go to the crossy quiz question 3
    else if (state == "CrossyQuizQuestion3") {
      crossyQuiz.display();
      crossyQuiz.displayQ3();
      crossyQuiz.displayAnswer3();
      crossyQuiz.displayNumber3();
    }
    //Go to the crossy quiz question 4
    else if (state == "CrossyQuizQuestion4") {
      crossyQuiz.display();
      crossyQuiz.displayQ4();
      crossyQuiz.displayAnswer4();
      crossyQuiz.displayNumber4();
    }
    //Go to the crossy quiz question 5
    else if (state == "CrossyQuizQuestion5") {
      crossyQuiz.display();
      crossyQuiz.displayQ5();
      crossyQuiz.displayAnswer5();
      crossyQuiz.displayNumber5();
    }
    //Go to Quiz Completed screen
    else if (state == "QuizComplete") {
      crossyEnd.display();
    }
    //Go to the bag note
    else if (state == "BagNote") {
      bagNote.display();
    }
    //Go to the piano sheet
    else if (state == "PianoSheet") {
      pianoSheet.display();
    }
    //Go to room4 pre entance
    else if (state == "Room4Entrance") {
      room4PreEntranceState.display();
    }
    //Go to the hidden key screen
    else if (state == "HiddenKey") {
      hiddenKey.display();
    }
    //Go to room4
    else if (state == "Room4") {
      room4State.display();
    }
    //Go to the piano keyboard
    else if (state == "PianoKeyboard") {
      pianoKeyboard.display();
      pianoKeyboard.displaySequence();
    }
    //Go to end cutscene 01
    else if (state == "EndScene1") {
      endCutScene.displayEndBackground();
      endCutScene.displayEndTime();
      endCutScene.displayEndDialogueBox();
      endCutScene.displayEndDialogue();
    }
    //Go to end cutscene 02
    else if (state == "EndScene2") {
      endCutScene.displayEndBackground();
      endCutScene.displayEndTime2();
      endCutScene.displayEndDialogueBox();
      endCutScene.displayEndDialogue2();
    }
    //Go to final end state
    else if (state == "EndScene3") {
      endCutScene.displayFinalEnding();
    }
    //Go to alternative Ending 1
    else if (state == "AltEnd1") {
      altEndScene.display();
      altEndScene.displayDialogue();
    }
    //Go to the final screen for the alt ending
    else if (state == "AltEndFinal") {
      altAfterEnd.display();
    }
  }
}
