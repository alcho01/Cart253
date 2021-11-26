//Class for key pressed events
class StateKeyPressedInteraction {
  constructor() {

  }

  //activate the key pressed functionality
  active() {
    //Call the pretitle keypressed function
    preTitle.keyPressed();
    //Delete a letter at a time for each
    if (keyCode == 8) {
      userCurrentInput = userCurrentInput.substring(0, userCurrentInput.length + keyDel);
      passCurrentInput = passCurrentInput.substring(0, passCurrentInput.length + keyDel);
      atomCurrentInput = atomCurrentInput.substring(0, atomCurrentInput.length + keyDel);
      answerCurrentInput = answerCurrentInput.substring(0, answerCurrentInput.length + keyDel);
    }

    if (state == "PianoKeyboard") {
      pianoKeyboard.keyPressed();
      if (keyCode == 8) {
        pianoCurrentInput = pianoCurrentInput.substring(0, pianoCurrentInput.length + keyDel);
      }
    }
  }
}
