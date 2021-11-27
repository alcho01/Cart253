//Class for the piano keyboard task which displays after the piano entity is clicked
class PianoKeyboard extends Apartment {
  constructor(w, h, x, y, pianoKeyboardImage) {
    //Call parameters from super class
    super(w, h, x, y);
    //Image
    this.pianoKeyboardImage = pianoKeyboardImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    //Exit Button
    this.exitX = 1215;
    this.exitX2 = 1284;
    this.exitY = 0;
    this.exitY2 = 41;

    //Sequence
    //position
    this.textX = 300;
    this.textY = 268;
    //text size
    this.size = 30;
    //normal fill
    this.black = 0;
    //Correct! Colour
    this.r = 52;
    this.g = 235;
    this.b = 91;

    //Sound elements

    //notes in MIDI
    this.c4 = 60;
    this.d4 = 62;
    this.e4 = 64;
    this.f4 = 65;
    this.g4 = 67;
    this.a4 = 70;
    this.b4 = 71;

    //ADSR
    this.attackTime = 0.05;
    this.decayTime = 0.7;
    this.susRatio = 0.2;
    this.releaseTime = 0.05;
    //Range
    this.attackLevel = 1;
    this.releaseLevel = 0;

    //For loop for each key to play the given sound
    for (let i = 0; i < numKeys; i++) {
      envo.push(new p5.Env()); //add envelope to array
      envo[i].setADSR(this.attackTime, this.decayTime, this.susRatio, this.releaseTime); //loudness of sound
      envo[i].setRange(this.attackLevel, this.releaseLevel); //how quick the volume goes back to normal
      osc.push(new p5.Oscillator()); //add oscillator to array
      osc[i].amp(envo[i]); //modulate the amplitude
    }

  }

  //Display the piano keyboard
  display() {
    push();
    imageMode(CENTER);
    image(this.pianoKeyboardImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the sequence
  displaySequence() {
    push();
    //If it is the correct input switch the lettering to a different colour
    if (pianoKeyboard.inputIsCorrect()) {
      fill(this.r, this.g, this.b);
      task4Complete = true;
    } else {
      fill(this.black);
    }
    textAlign(CENTER);
    textFont(silomFont);
    textSize(this.size);
    text(pianoCurrentInput, this.textX, this.textY);
    pop();
  }

  //mouse Functionality
  mouseClicked() {
    //If the exit button is clicked switch to Room 4
    if (mouseX > this.exitX && mouseX < this.exitX2) {
      if (mouseY > this.exitY && mouseY < this.exitY2) {
        //Start the rain again
        rainSFX.play();
        //Change states when the exit button is clicked
        state = "Room4";
        //Reset the input
        pianoCurrentInput = "";
      }
    }
  }

  //key pressed functionality
  keyPressed() {
    if (keyCode == 65 ) { //Give each key their defined keyCode
      osc[0].start(); //Start it
      osc[0].freq(midiToFreq(this.c4)); //Play it on middle C
      envo[0].play(); //Play the envolope
      pianoCurrentInput += 'a'; //Display the key pressed
    }
    if (keyCode == 83 ) { //Give each key their defined keyCode
      osc[1].start(); //Start it
      osc[1].freq(midiToFreq(this.d4)); //Play it on D4
      envo[1].play(); //Play the envolope
      pianoCurrentInput += 's';
    }
    if (keyCode == 68 ) { //Give each key their defined keyCode
      osc[2].start(); //Start it
      osc[2].freq(midiToFreq(this.e4)); //Play it on E4
      envo[2].play(); //Play the envolope
      pianoCurrentInput += 'd';
    }
    if (keyCode == 70 ) { //Give each key their defined keyCode
      osc[3].start(); //Start it
      osc[3].freq(midiToFreq(this.f4)); //Play it on F4
      envo[3].play(); //Play the envolope
      pianoCurrentInput += 'f';
    }
    if (keyCode == 71 ) { //Give each key their defined keyCode
      osc[4].start(); //Start it
      osc[4].freq(midiToFreq(this.g4)); //Play it on G4
      envo[4].play(); //Play the envolope
      pianoCurrentInput += 'g';
    }
    if (keyCode == 72 ) { //Give each key their defined keyCode
      osc[5].start(); //Start it
      osc[5].freq(midiToFreq(this.a4)); //Play it on A4
      envo[5].play(); //Play the envolope
      pianoCurrentInput += 'h';
    }
    if (keyCode == 74 ) { //Give each key their defined keyCode
      osc[6].start(); //Start it
      osc[6].freq(midiToFreq(this.b4)); //Play it on B4
      envo[6].play(); //Play the envolope
      pianoCurrentInput += 'i';
    }
  }

  //If the sequence is correct
  inputIsCorrect() {
    if (pianoCurrentInput === pianoSequence) {
      return true;
    } else {
      return false;
    }
  }
}
