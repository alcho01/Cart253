//Class for key pressed events
class StateKeyPressedInteraction {
  constructor() {}

  //activate the key pressed functionality
  active() {
    if (state == "OpeningScene") {
      //Call the opening scene key pressed
      openingScene.keyPressed();
    }

    else if (state == "PreTitle") {
      //Call the pretitle keypressed function
      preTitle.keyPressed();
    }

    //Could have put this in an array of strings.
    else if (state == "EndScene1") {
      //Call the ending keypressed functions
      endCutScene.keyPressed();
    }

    else if (state == "EndScene2") {
      //Call the ending keypressed functions
      endCutScene.keyPressed();
    }

    else if (state == "EndScene3") {
      //Call the ending keypressed functions
      endCutScene.keyPressed();
    }

    else if (state == "AltEnd1") {
      //Call the ending keypressed functions
      altEndScene.keyPressed();
    }

    else if (state == "AltEndFinal") {
      //Call the final alternative ending key pressed
      altAfterEnd.keyPressed();
    }

    //Delete a letter at a time for each
    if (keyCode == 8) {
      userCurrentInput = userCurrentInput.substring(
        0,
        userCurrentInput.length + keyDel
      );
      passCurrentInput = passCurrentInput.substring(
        0,
        passCurrentInput.length + keyDel
      );
      atomCurrentInput = atomCurrentInput.substring(
        0,
        atomCurrentInput.length + keyDel
      );
      answerCurrentInput = answerCurrentInput.substring(
        0,
        answerCurrentInput.length + keyDel
      );
    }

    if (state == "PianoKeyboard") {
      pianoKeyboard.keyPressed();
      if (keyCode == 8) {
        pianoCurrentInput = pianoCurrentInput.substring(
          0,
          pianoCurrentInput.length + keyDel
        );
      }
    }
  }
}
