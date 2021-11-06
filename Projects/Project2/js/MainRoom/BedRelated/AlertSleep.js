//Class that alerts the player they can't access the bed yet
class AlertSleep {

  constructor(w,h,x,y,alertsleepImage) {
    //Dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
    //Image
    this.alertsleepImage = alertsleepImage;
  }

  //Display the alert
  display() {
  //Calculate the distance between the mouse and the bed
    let d = dist(mouseX,mouseY,bed.x,bed.y);
    if (d < bed.height/4) {
  //If the tasks are still incomplete display the alert
    if (task1complete == false) {
      push();
      imageMode(CENTER);
      image(this.alertsleepImage,this.x,this.y,this.width,this.height);
      pop();
      }
    }
  }
}
