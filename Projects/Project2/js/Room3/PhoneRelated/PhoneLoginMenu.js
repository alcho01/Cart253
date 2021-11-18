//Class for the phone log in menu screen
  class PhoneLoginMenu extends Apartment{
    constructor(w, h, x, y, phoneLoginImage) {
      //Call parameters from super class
      super(w, h, x, y);
      //Image
      this.phoneLoginImage = phoneLoginImage;

      //Parameters for numbers
      this.textX = 645;
      this.textY = 173;
      this.size = 40;
      //Fill White
      this.white = 255;

      //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
      this.powerButtonX = 850;
      this.powerButtonX2 = 875;
      this.powerButtonY = 67;
      this.powerButtonY2 = 157;

      //Cancel Button //Erases the current input
      this.cancelButtonX = 724;
      this.cancelButtonX2 = 822;
      this.cancelButtonY = 552;
      this.cancelButtonY2 = 600;

      //Numbers from 0 to 9
      this.oneX = 475;
      this.oneX2 = 560;
      this.oneY = 192;
      this.oneY2 = 279;

      this.twoX = 604;
      this.twoX2 = 690;
      this.twoY = 192;
      this.twoY2 = 279;

      this.threeX = 732;
      this.threeX2 = 816;
      this.threeY = 192;
      this.threeY2 = 279;

      this.fourX = 475;
      this.fourX2 = 560;
      this.fourY = 303;
      this.fourY2 = 390;

      this.fiveX = 604;
      this.fiveX2 = 690;
      this.fiveY = 303;
      this.fiveY2 = 390;

      this.sixX = 732;
      this.sixX2 = 816;
      this.sixY = 303;
      this.sixY2 = 390;

      this.sevenX = 475;
      this.sevenX2 = 560;
      this.sevenY = 418;
      this.sevenY2 = 503;

      this.eightX = 604;
      this.eightX2 = 690;
      this.eightY = 418;
      this.eightY2 = 503;

      this.nineX = 732;
      this.nineX2 = 816;
      this.nineY = 418;
      this.nineY2 = 503;

      this.zeroX = 604;
      this.zeroX2 = 690;
      this.zeroY = 522;
      this.zeroY2 = 608;
    }

    //Display the log in screen for the phone
    display() {
      push();
      imageMode(CENTER);
      image(this.phoneLoginImage, this.x, this.y, this.width, this.height);
      pop();
    }

    //Display the numbers
    displayNums() {
      //If the correct input is correct switch to the phone home state
      if (phoneLoginMenu.inputIsCorrect()) {
        state = "PhoneHomeScreen";
      }
      else {
        fill(this.white);
      }
        push();
        textAlign(CENTER);
        textSize(this.size);
        text(phoneCurrentInput, this.textX, this.textY);
        pop();
      }

    //Mouse clicked interactivity for phone log in screen
    mouseClicked() {
      //Stop the rain when the phone is clicked
      rainSFX.stop();
      //If the powerButton is clicked switch to Room 3
      if (mouseX > this.powerButtonX && mouseX < this.powerButtonX2) {
        if (mouseY > this.powerButtonY && mouseY < this.powerButtonY2) {
          //Change states when the powerButton is clicked
          state = "Room3";
          phoneCurrentInput = "";
          //Resume the rain if the power button is clicked
          rainSFX.play();
        }
      }
      //If the number 1 is pressed
      if (mouseX > this.oneX && mouseX < this.oneX2) {
        if (mouseY > this.oneY && mouseY < this.oneY2) {
          phoneCurrentInput += '1';
        }
      }
      //If the number 2 is pressed
      if (mouseX > this.twoX && mouseX < this.twoX2) {
        if (mouseY > this.twoY && mouseY < this.twoY2) {
          phoneCurrentInput += '2';
        }
      }
      //If the number 3 is pressed
      if (mouseX > this.threeX && mouseX < this.threeX2) {
        if (mouseY > this.threeY && mouseY < this.threeY2) {
          phoneCurrentInput += '3';
        }
      }
      //If the number 4 is pressed
      if (mouseX > this.fourX && mouseX < this.fourX2) {
        if (mouseY > this.fourY && mouseY < this.fourY2) {
          phoneCurrentInput += '4';
        }
      }
      //If the number 5 is pressed
      if (mouseX > this.fiveX && mouseX < this.fiveX2) {
        if (mouseY > this.fiveY && mouseY < this.fiveY2) {
          phoneCurrentInput += '5';
        }
      }
      //If the number 6 is pressed
      if (mouseX > this.sixX && mouseX < this.sixX2) {
        if (mouseY > this.sixY && mouseY < this.sixY2) {
          phoneCurrentInput += '6';
        }
      }
      //If the number 7 is pressed
      if (mouseX > this.sevenX && mouseX < this.sevenX2) {
        if (mouseY > this.sevenY && mouseY < this.sevenY2) {
          phoneCurrentInput += '7';
        }
      }
      //If the number 8 is pressed
      if (mouseX > this.eightX && mouseX < this.eightX2) {
        if (mouseY > this.eightY && mouseY < this.eightY2) {
          phoneCurrentInput += '8';
        }
      }
      //If the number 9 is pressed
      if (mouseX > this.nineX && mouseX < this.nineX2) {
        if (mouseY > this.nineY && mouseY < this.nineY2) {
          phoneCurrentInput += '9';
        }
      }
      //If the number 0 is pressed
      if (mouseX > this.zeroX && mouseX < this.zeroX2) {
        if (mouseY > this.zeroY && mouseY < this.zeroY2) {
          phoneCurrentInput += '0';
        }
      }
      //If the cancel button is pressed
      if (mouseX > this.cancelButtonX && mouseX < this.cancelButtonX2) {
        if (mouseY > this.cancelButtonY && mouseY < this.cancelButtonY2) {
          phoneCurrentInput = '';
        }
      }
    }

  //If the password is correct
  inputIsCorrect() {
    if (phoneCurrentInput === phoneCode) {
      return true;
    } else {
      return false;
    }
  }
}
