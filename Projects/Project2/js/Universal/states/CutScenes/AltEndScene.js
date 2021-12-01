//The class for the alternative end scene *Bad End* or giving up
class AltEndScene extends Apartment{
  constructor(w, h, x, y, altEndSceneImage1, altEndSceneImage2, altEndSceneImage3, altEndSceneImage4){
  //Call parameters from superclass
    super(w, h, x, y);
    //Images
    this.altEndSceneImage1 = altEndSceneImage1;
    this.altEndSceneImage2 = altEndSceneImage2;
    this.altEndSceneImage3 = altEndSceneImage3;
    this.altEndSceneImage4 = altEndSceneImage4;

    //colour (WHITE)
    this.white = 255;
    //Font
    this.lofiFont = lofiFont;
    //Dialogue text colour
    this.r = 0;
    this.g = 3;
    this.b = 77;
    //Position text
    this.dialogueX = 279;
    this.dialogueY = 663;
    //Dialogue sizes
    this.dialogueSize = 40;
    this.dialogueSizeSmall = 30;
    //Dialogue Box
    //Dimensions
    this.dialogueBoxWidth = 530;
    this.dialogueBoxHeight = 60;
    //position
    this.dialogueBoxX = 279;
    this.dialogueBoxY = 655;
    //radius
    this.dialogueBoxRadius = 20;
    //string to display
    this.string = 'This is too much!';
  }

  //Display the Alternative ending scene
  display() {
    push();
    imageMode(CENTER);

    if (frameCount % 60 < 10/2) {
      image(this.altEndSceneImage1, this.x, this.y, this.width, this.height);
    }
    else if (frameCount % 40 < 10/2) {
      image(this.altEndSceneImage2, this.x, this.y, this.width, this.height);
    }
    else if (frameCount % 30 < 10/2) {
      image(this.altEndSceneImage3, this.x, this.y, this.width, this.height);
    }
    else if (frameCount % 15 < 10/2) {
      image(this.altEndSceneImage4, this.x, this.y, this.width, this.height);

    pop();
    }
  }

  displayDialogue() {
    //Display the container
    push();
    fill(this.white);
    stroke(this.r, this.g, this.b);
    rectMode(CENTER);
    rect(this.dialogueBoxX, this.dialogueBoxY, this.dialogueBoxWidth, this.dialogueBoxHeight, this.dialogueBoxRadius);
    pop();

    //Display the text
    push();
    fill(this.r, this.g, this.b);
    textFont(this.lofiFont);
    textAlign(CENTER);
    textSize(this.dialogueSizeSmall);
    text(this.string, this.dialogueX, this.dialogueY);
    pop();
  }

  keyPressed() {
    //Play the sound fx for switching between dialogues
    dialogueSFX.play();
    //Link the string to the current dialogue
    this.string = alternativeEndDialogueStrings[currentAlternativeEndDialogueString];
    //Change strings when key is pressed
    currentAlternativeEndDialogueString += 1;
    //If there is no more strings change the state
    if (currentAlternativeEndDialogueString > alternativeEndDialogueStrings.length) {
      state = "AltEndFinal";
    }
  }
}
