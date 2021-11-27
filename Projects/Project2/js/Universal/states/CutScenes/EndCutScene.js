//Class that hold the end cut scene elements
class EndCutScene {
  constructor() {
    //End Background
    //Fill
    this.endFill = 117;
    //position
    this.endBgX = 640;
    this.endBgY = 360;
    //dimensions
    this.endBgWidth = 1280;
    this.endBgHeight = 720;

    //colour (WHITE)
    this.white = 255;

    //End Time parameters

    //font
    this.alarmtimeFont = alarmtimeFont;
    this.lofiFont = lofiFont;
    //position
    this.endX = 640;
    this.endY = 360;
    //Text size
    this.endSize = 80;

    //Dialogue parameters
    //Dialogue text colour
    this.r = 0;
    this.g = 3;
    this.b = 77;

    //Position
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

    //Border of the dialogue box
    //Dimensions
    this.dialogueBorderWidth = 540;
    this.dialogueBorderHeight = 70;
    //position
    this.dialogueBorderX = 279;
    this.dialogueBorderY = 655;
    //Radius
    this.dialogueBorderRadius = 20;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.dialogueContainerX = 12;
    this.dialogueContainerX2 = 552;
    this.dialogueContainerY = 621;
    this.dialogueContainerY2 = 691;

  }

  //Related to end cutscene 01/02
    displayEndBackground() {
      push();
      fill(this.endFill);
      noStroke();
      rectMode(CENTER);
      rect(this.endBgX, this.endBgY, this.endBgWidth, this.endBgHeight);
      pop();
    }

//END CUTSCENE 01

    //Display the end cutscene01 time
    displayEndTime() {
      push();
      fill(this.white);
      textFont(this.alarmtimeFont);
      textAlign(CENTER);
      textSize(this.endSize);
      text('3' + ':' + '59' + ' AM', this.endX, this.endY);
      pop();
    }

    //Display dialogue text for the end cutscene01
    displayEndDialogue() {
      push();
      fill(this.r, this.g, this.b);
      textFont(this.lofiFont);
      textAlign(CENTER);
      textSize(this.dialogueSize);
      text('Hit 4:00 AM! I need to go to bed!', this.dialogueX, this.dialogueY);
      pop();
    }

    //Display the dialogue box for the end cutscenes
    displayEndDialogueBox() {
      //Border of box
      push();
      //Choose the dark blue color
      fill(this.r, this.g, this.b);
      rectMode(CENTER);
      rect(this.dialogueBorderX, this.dialogueBorderY, this.dialogueBorderWidth, this.dialogueBorderHeight, this.dialogueBorderRadius);
      noStroke();
      pop();

      //Inner dialogueBox
      push();
      fill(this.white);
      noStroke();
      rectMode(CENTER);
      rect(this.dialogueBoxX, this.dialogueBoxY, this.dialogueBoxWidth, this.dialogueBoxHeight, this.dialogueBoxRadius);
      pop();
    }

    //End Cutscene 02
    //Display the end cutscene01 time
    displayEndTime2() {
      push();
      fill(this.white);
      textFont(this.alarmtimeFont);
      textAlign(CENTER);
      textSize(this.endSize);
      text('4' + ':' + '00' + ' AM', this.endX, this.endY);
      pop();
    }

    //Display dialogue text for the end cutscene02
    displayEndDialogue2() {
      push();
      fill(this.r, this.g, this.b);
      textFont(this.lofiFont);
      textAlign(CENTER);
      textSize(this.dialogueSizeSmall);
      text('Finally! I got out of the 3:00 AM cycle!', this.dialogueX, this.dialogueY);
      pop();
    }

    displayFinalEnding() {
      //Background for final Screen
      push();
      noStroke();
      fill(this.r, this.g, this.b);
      rectMode(CENTER);
      //Re use the same parameters because they are the same
      rect(this.endBgX, this.endBgY, this.endBgWidth, this.endBgHeight);
      pop();

      //The text saying Thank you for playing
      push();
      fill(this.white);
      textAlign(CENTER);
      //Re use the size from previous parameters because they are the same.
      textSize(this.endSize);
      //Re use the x and y from the other parameters because they are the same
      text('Thank You for Playing!', this.endX, this.endY );
      pop();
    }

    keyPressed() {
      //Go to the second scene if a key is pressed
      if (state == "EndScene1") {
          state = "EndScene2";
        }
        //Go to the third scene if a key is pressed
        else if (state == "EndScene2") {
          state = "EndScene3";
        }
        //Return to the title if a key is pressed
        else if (state == "EndScene3") {
          state = "TitleScreen";
          //Play At Title and loop on title
          titleSong.play();
          titleSong.loop();
          //Stop all current songs
           song1.stop();
           song2.stop();
           song3.stop();
           song4.stop();
           song5.stop();
           song6.stop();
        }
      }
    }
