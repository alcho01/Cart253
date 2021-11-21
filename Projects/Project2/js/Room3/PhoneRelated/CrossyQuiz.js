//Class for the Crossy Quiz which is shown after the fooled Screen
class CrossyQuiz extends Apartment{
  constructor(w, h, x, y, crossyQuizImage) {
    //call the parameters from the super class
    super(w, h, x, y);
    //Image
    this.crossyQuizImage = crossyQuizImage;

    //Parameters for question text
    //Position
    this.textX = 642;
    this.textY = 288;
    //Size variations depending on length of sentence (Universal for answer text and question number)
    this.size = 30;
    this.sizeSmall = 20;
    this.sizeLarge = 55;
    //Fill White
    this.white = 255;

    //Parameters for answer text
    //Position
    this.textAnswerX = 640;
    this.textAnswerY = 609;

    //Parameters for the question Number
    //Position
    this.textNumX = 1188;
    this.textNumY = 82;

    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.exitButtonX = 12;
    this.exitButtonX2 = 122;
    this.exitButtonY = 8;
    this.exitButtonY2 = 116;
  }

  //Display the quiz background
  display() {
    push();
    imageMode(CENTER);
    image(this.crossyQuizImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display Question 1
  displayQ1() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.size);
    text('What Letter Represented Orange?', this.textX, this.textY);
    pop();
  }

  //Display Question 2
  displayQ2() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.sizeSmall);
    text('What is the Colour of the Third Z Position', this.textX, this.textY);
    pop();
  }
  //Display Question 3
  displayQ3() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.sizeSmall);
    text('What was the 5th Word Coloured in Orange?', this.textX, this.textY);
    pop();
  }
  //Display Question 4
  displayQ4() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.size);
    text('How Many Photos Were There?', this.textX, this.textY);
    pop();
  }
  //Display Question 5
  displayQ5() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.sizeSmall);
    text('What Was the Name of the Game Called?', this.textX, this.textY);
    pop();
  }

  //Display the Answer text
  displayAnswer1() {
    //if the answer is correct go to question 2
    if (crossyQuiz.a1IsCorrect()) {
      answerCurrentInput = "";
      state = "CrossyQuizQuestion2";
    }
    else {
      fill(this.white);
    }
    push();
    textAlign(CENTER);
    textSize(this.size);
    text(answerCurrentInput, this.textAnswerX, this.textAnswerY);
    pop();
  }

  displayAnswer2() {
    //if the answer is correct go to question 3
    if (crossyQuiz.a2IsCorrect()) {
      answerCurrentInput = "";
      state = "CrossyQuizQuestion3";
    }
    else {
      fill(this.white);
    }
    push();
    textAlign(CENTER);
    textSize(this.size);
    text(answerCurrentInput, this.textAnswerX, this.textAnswerY);
    pop();
  }

  displayAnswer3() {
    //if the answer is correct go to question 4
    if (crossyQuiz.a3IsCorrect()) {
      answerCurrentInput = "";
      state = "CrossyQuizQuestion4";
    }
    else {
      fill(this.white);
    }
    push();
    textAlign(CENTER);
    textSize(this.size);
    text(answerCurrentInput, this.textAnswerX, this.textAnswerY);
    pop();
  }

  displayAnswer4() {
    //if the answer is correct go to question 5
    if (crossyQuiz.a4IsCorrect()) {
      answerCurrentInput = "";
      state = "CrossyQuizQuestion5";
    }
    else {
      fill(this.white);
    }
    push();
    textAlign(CENTER);
    textSize(this.size);
    text(answerCurrentInput, this.textAnswerX, this.textAnswerY);
    pop();
  }

  displayAnswer5() {
    //if the answer is correct go to the end
    if (crossyQuiz.a5IsCorrect()) {
      task3Complete = true;
      task4Available = true;
      answerCurrentInput = "";
      state = "QuizComplete";
    }
    else {
      fill(this.white);
    }
    push();
    textAlign(CENTER);
    textSize(this.size);
    text(answerCurrentInput, this.textAnswerX, this.textAnswerY);
    pop();
  }

  //Display the question number the user is on
  displayNumber1() {
    push();
    textAlign(CENTER);
    textSize(this.sizeLarge);
    text('1', this.textNumX, this.textNumY);
    pop();
  }

  displayNumber2() {
    push();
    textAlign(CENTER);
    textSize(this.sizeLarge);
    text('2', this.textNumX, this.textNumY);
    pop();
  }

  displayNumber3() {
    push();
    textAlign(CENTER);
    textSize(this.sizeLarge);
    text('3', this.textNumX, this.textNumY);
    pop();
  }

  displayNumber4() {
    push();
    textAlign(CENTER);
    textSize(this.sizeLarge);
    text('4', this.textNumX, this.textNumY);
    pop();
  }

  displayNumber5() {
    push();
    textAlign(CENTER);
    textSize(this.sizeLarge);
    text('5', this.textNumX, this.textNumY);
    pop();
  }

  //mouse functionality for the crossy quiz
  mouseClicked() {
    //If the exitButton is clicked return to phone home
    if (mouseX > this.exitButtonX && mouseX < this.exitButtonX2) {
      if (mouseY > this.exitButtonY && mouseY < this.exitButtonY2) {
        //Change states when the exitButton is clicked
        state = "PhoneHomeScreen";
        answerCurrentInput = "";
      }
    }
  }

  //If the input is correct return it true if not false
  a1IsCorrect() {
    if (answerCurrentInput === a1) {
      return true;
    } else {
      return false;
    }
  }

  a2IsCorrect() {
    if (answerCurrentInput === a2) {
      return true;
    } else {
      return false;
    }
  }

  a3IsCorrect() {
    if (answerCurrentInput === a3) {
      return true;
    } else {
      return false;
    }
  }

  a4IsCorrect() {
    if (answerCurrentInput === a4) {
      return true;
    } else {
      return false;
    }
  }

  a5IsCorrect() {
    if (answerCurrentInput === a5) {
      return true;
    } else {
      return false;
    }
  }
}
