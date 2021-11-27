//Class for the title screen
class TitleState extends Apartment {
  constructor(w, h, logoImage, titleButtonsImage, instructionsImage) {
    //Title Background parameters
    //Call parameters from super class
    super(w, h);
    //position
    this.x = 0;
    this.y = 0;
    //Fill
    this.r = 0;
    this.g = 0;
    this.b = 51;

    //Floor for the title background
    //dimensions
    this.floorWidth = 1280;
    this.floorHeight = 720;
    //position
    this.floorX = 0;
    this.floorY = 650;
    //fill - name of the object followed by the fill value
    this.floorFill = 102;

    //Title Logo
    //dimensions
    this.logoWidth = 200;
    this.logoHeight = 200;
    //position for translation
    this.logoTranslateX = 640;//640;
    this.logoTranslateY = 150;//150;
    //position
    this.logoX = 0;
    this.logoY = 0;
    //Angle
    this.logoAngle = 0;
    this.logoAngleIncrease = 0.015;
    //Image
    this.logoImage = logoImage;

    //buttons
    //dimensions
    this.buttonsWidth = 350;
    this.buttonsHeight = 350;
    //position
    this.buttonsX = 640;
    this.buttonsY = 500;
    //Image
    this.titleButtonsImage = titleButtonsImage;

    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Start Button
    this.startButtonX = 456;
    this.startButtonX2 = 816;
    this.startButtonY = 327;
    this.startButtonY2 = 489;
    //Help Button
    this.helpButtonX = 456;
    this.helpButtonX2 = 816;
    this.helpButtonY = 517;
    this.helpButtonY2 = 676;
  }

  //Display the background
  display() {
    push();
    noStroke();
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

  displayButtons() {
    push();
    imageMode(CENTER);
    image(this.titleButtonsImage, this.buttonsX, this.buttonsY, this.buttonsWidth, this.buttonsHeight);
    pop();
  }

  //Display the Rain
  displayRain() {
  //Display the raindrops //Need a for loop for arrays. Call the class functions in the for loop to display the raindrops
  for (let i = 0; i < rainDrop.length; i++) {
    rainDrop[i].display();
    rainDrop[i].move();
  }
}

  //Display the Logo
  displayLogo() {
    push();
    translate(this.logoTranslateX, this.logoTranslateY);
    rotate(this.logoAngle);
    imageMode(CENTER);
    image(this.logoImage, this.logoX, this.logoY, this.logoWidth, this.logoHeight);
    pop();

    //Change the angle by adding small increments
    this.logoAngle += this.logoAngleIncrease;
  }

  //mouse functionality for the title screen
  mouseClicked() {
    //if the play button is clicked go to the main Room
    if (mouseX > this.startButtonX && mouseX < this.startButtonX2) {
      if (mouseY > this.startButtonY && mouseY < this.startButtonY2) {
        //Reset the game when this button is clicked
        reset();
        state = "MainRoom";
      }
    }
    //if the help button is clicked review the instructions
    if (mouseX > this.helpButtonX && mouseX < this.helpButtonX2) {
      if (mouseY > this.helpButtonY && mouseY < this.helpButtonY2) {
        state = "Help";
      }
    }
  }
}
