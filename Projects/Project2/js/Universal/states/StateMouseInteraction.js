//Class for the mouse clicked interaction
class StateMouseInteraction {
  constructor() {

  }

  //Activate the mouse clicked interaction based on what state it is in
  active() {
    //Title screen mouse functionality
    if (state == "TitleScreen") {
      titleState.mouseClicked();
    }
    //Instructions screen mouse functionality
    if (state == "Help") {
      instructions.mouseClicked();
    }
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
    //Phone Login Screen mouse functionality
    if (state == "PhoneLoginMenu") {
      cursor();
      phoneLoginMenu.mouseClicked();
    }
    //Phone Home screen mouse functionality
    if (state == "PhoneHomeScreen") {
      phoneHome.mouseClicked();
    }
    //Phone Photo screen mouse functionality
    if (state == "PhonePhotoScreen") {
      phonePhoto.mouseClicked();
    }
    //Phone Note screen mouse functionality
    if (state == "PhoneNoteScreen") {
      phoneNote.mouseClicked();
    }
    //Crossy Menu screen mouse functionality
    if (state == "CrossyMenu") {
      crossyMenu.mouseClicked();
    }
    //Crossy Help screen mouse functionality
    if (state == "CrossyHelp") {
      crossyHelp.mouseClicked();
    }
    //Crossy fooled screen mouse functionality
    if (state == "CrossyFooled") {
      crossyFooled.mouseClicked();
    }
    //Crossy quiz screen mouse functionality
    if (state == "CrossyQuizQuestion1") {
      crossyQuiz.mouseClicked();
    }
    //Crossy quiz screen mouse functionality
    if (state == "CrossyQuizQuestion2") {
      crossyQuiz.mouseClicked();
    }
    //Crossy quiz screen mouse functionality
    if (state == "CrossyQuizQuestion3") {
      crossyQuiz.mouseClicked();
    }
    //Crossy quiz screen mouse functionality
    if (state == "CrossyQuizQuestion4") {
      crossyQuiz.mouseClicked();
    }
    //Crossy quiz screen mouse functionality
    if (state == "CrossyQuizQuestion5") {
      crossyQuiz.mouseClicked();
    }
    //Crossy end screen mouse functionality
    if (state == "QuizComplete") {
      crossyEnd.mouseClicked();
    }
    //bag note screen mouse functionality
    if (state == "BagNote") {
      cursor();
      bagNote.mouseClicked();
    }
    //Piano Sheet screen mouse functionality
    if (state == "PianoSheet") {
      pianoSheet.mouseClicked();
    }
    //Room4PreEntrance screen mouse functionality
    if (state == "Room4Entrance") {
      cursor();
      room4PreEntrance.mouseClicked();
    }
    //Hidden key mouse functionality
    if (state == "HiddenKey") {
      hiddenKey.mouseClicked();
    }
    //Room 4 mouse functionality
    if (state == "Room4") {
      cursor();
      room4Layout.mouseClicked();
    }
    if (state == "PianoKeyboard") {
      cursor();
      pianoKeyboard.mouseClicked();
    }
  }
}
