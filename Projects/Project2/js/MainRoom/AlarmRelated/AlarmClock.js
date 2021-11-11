//The alarm clock is displayed in the main room
class AlarmClock {
  constructor(w, h, x, y, alarmclockImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //image
    this.alarmclockImage = alarmclockImage;
  }

  //Display the alarm clock
  display() {
    push();
    imageMode(CENTER);
    image(this.alarmclockImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
