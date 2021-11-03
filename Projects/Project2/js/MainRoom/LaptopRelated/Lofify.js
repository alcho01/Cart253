//The class for the lofify menu screen which is accessed after the user presses the lofify app
class Lofify extends Apartment{

  constructor(w,h,x,y,lofifyImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //image
    this.lofifyImage = lofifyImage;
  }

  //Display the lofify screen
  display() {
    push();
    imageMode(CENTER);
    image(this.lofifyImage,this.x,this.y,this.width,this.height);
    pop();
  }

  //Mouse function
  mouseClicked() {
  //Button to stop for song1
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 270 && mouseY < 340){
        song1.stop();
        }
      }
  //Button to stop for song2
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 345 && mouseY < 412){
        song2.stop();
        }
      }
  //Button to stop for song3
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 421 && mouseY < 486){
        song3.stop();
        }
      }
  //Button to stop for song4
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 497 && mouseY < 562){
        song4.stop();
        }
      }
  //Button to stop for song5
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 573 && mouseY < 638){
        song5.stop();
        }
      }
  //Button to stop for song6
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 646 && mouseY < 712){
        song6.stop();
        }
      }
  //If the close window button is clicked return to the laptop menu screen
      if (mouseX > 45 && mouseX < 275) {
      if (mouseY > 630 && mouseY < 705) {
        state = 'LaptopMenuScreen'
        }
      }
    }

    doubleClicked() {
  //Song 1
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 270 && mouseY < 340){
  //If double clicked play song1
        song1.play();
        song1.loop();
  //If double clicked stop all other songs except song 1
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        }
      }


  //Song 2
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 345 && mouseY < 412){
  //If double clicked play song2
        song2.play();
        song2.loop();
  //If double clicked stop all other songs except song 2
        song1.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        }
      }

  //Song 3
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 421 && mouseY < 486){
  //If double clicked play song3
        song3.play();
        song3.loop();
  //If double clicked stop all other songs except song 3
        song1.stop();
        song2.stop();
        song4.stop();
        song5.stop();
        song6.stop();
        }
      }

  //Song 4
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 497 && mouseY < 562){
  //If double clicked play song4
        song4.play();
        song4.loop();
  //If double clicked stop all other songs except song 4
        song1.stop();
        song2.stop();
        song3.stop();
        song5.stop();
        song6.stop();
        }
      }

  //Song 5
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 573 && mouseY < 638){
  //If double clicked play song5
        song5.play();
        song5.loop();
  //If double clicked stop all other songs except song 5
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song6.stop();
        }
      }

  //Song 6
      if (mouseX > 350 && mouseX < 1270){
      if (mouseY > 646 && mouseY < 712){
  //If double clicked play song6
        song6.play();
        song6.loop();
  //If double clicked stop all other songs except song 6
        song1.stop();
        song2.stop();
        song3.stop();
        song4.stop();
        song5.stop();
        }
      }
    }
  }
