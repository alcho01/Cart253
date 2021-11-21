//Class for the keytyped interaction
class StateKeyTypedInteraction {
  constructor() {

  }

  //Activate the type function
  active() {
    if (state == "LaptopLogIn") {
      //Play typing sound
      typeSFX.play();
      userCurrentInput += key;
    } else if (state == "PasswordState") {
      //If it is under the password state allow this
      //Play typing sound
      typeSFX.play();
      passCurrentInput += key;
    } else if (state == "AtomScreen") {
      //Play typing sound
      typeSFX.play();
      atomCurrentInput += key;
    } else if (state == "CrossyQuizQuestion1") {
      answerCurrentInput += key;
    } else if (state == "CrossyQuizQuestion2") {
      answerCurrentInput += key;
    } else if (state == "CrossyQuizQuestion3") {
      answerCurrentInput += key;
    } else if (state == "CrossyQuizQuestion4") {
      answerCurrentInput += key;
    } else if (state == "CrossyQuizQuestion5") {
      answerCurrentInput += key;
    }
  }
}
