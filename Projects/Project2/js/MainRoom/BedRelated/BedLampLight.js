//The class for the bed lamp light that projects if the lamp is clicked
  class BedLampLight {

    constructor(w,h,x,y) {
    //dimensions
      this.width = 1280;
      this.height = 720;
    //position
      this.x = 0;
      this.y = 0;
    //is it on?
      this.on = false;
    }

    //Display a rectangle filled based on the bedlamplightfill colour
    display() {
      push();
      noStroke();
      fill(bedlamplightfill);
      rect(this.x,this.y,this.width,this.height);
      pop();
    }

    //Checks if the light is on or off
    checkbedlamplight() {
    //If on make the rectangle show a bit of opacity //else remove the opacity
      if (this.on) {
        bedlamplightfill = color(bedlampOn.r,bedlampOn.g,bedlampOn.b,bedlampOn.a);
      }
      else {
        bedlamplightfill = color(bedlampOff.r,bedlampOff.g,bedlampOff.b,bedlampOff.a);
      }
    }
  }
