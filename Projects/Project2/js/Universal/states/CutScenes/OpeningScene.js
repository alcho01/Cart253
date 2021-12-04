//Class for the opening scene
class OpeningScene extends Apartment{
  constructor(w, h, x, y, openingSceneImage1, openingSceneImage2, openingSceneImage3, openingSceneImage4) {
    //Call parameters from super class
    super(w, h, x, y);
    //Images
    this.openingSceneImage1 = openingSceneImage1;
    this.openingSceneImage2 = openingSceneImage2;
    this.openingSceneImage3 = openingSceneImage3;
    this.openingSceneImage4 = openingSceneImage4;

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
    this.dialogueSize = 35;
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
    this.string = 'Another day stuck in this rut!';

    //Text for switching scenes
    //Position
    this.textSwitchX = 1020;
    this.textSwitchY = 46;
  }

  //Display the opening scene
  display() {
    push();
    imageMode(CENTER);

    if (frameCount % 60 < 10/2) {
      image(this.openingSceneImage1, this.x, this.y, this.width, this.height);
    }
    else if (frameCount % 40 < 10/2) {
      image(this.openingSceneImage2, this.x, this.y, this.width, this.height);
    }
    else if (frameCount % 30 < 10/2) {
      image(this.openingSceneImage3, this.x, this.y, this.width, this.height);
    }
    else if (frameCount % 15 < 10/2) {
      image(this.openingSceneImage4, this.x, this.y, this.width, this.height);
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

    //Display piece of text saying how to switch between cutscenes.
    push();
    fill(this.r, this.g, this.b);
    textFont(this.lofiFont);
    textAlign(CENTER);
    textSize(this.dialogueSize);
    text('Press any key, to switch scenes', this.textSwitchX, this.textSwitchY);
    pop();
  }


  keyPressed() {
    //Play the sound fx for switching between dialogues
    dialogueSFX.play();
    //Link the string to the current dialogue
    this.string = openDialogueStrings[currentOpenDialogueString];
    //Change strings when key is pressed
    currentOpenDialogueString += 1;
    //If there is no more strings change the state
    if (currentOpenDialogueString > openDialogueStrings.length) {
      state = "MainRoom";
    }
  }
}
