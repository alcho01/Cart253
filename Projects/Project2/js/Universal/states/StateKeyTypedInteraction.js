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
    }
  }
}
