//The time being displayed on the alarm clock
class AlarmTime {
  constructor(x, y, alarmtimeFont) {
    //position
    this.x = x;
    this.y = y;
    //colour (WHITE)
    this.r = 255;
    this.g = 255;
    this.b = 255;
    //font
    this.alarmtimeFont = alarmtimeFont;
    //Text size
    this.size = 15;
    //Time settings
    this.timeInteger = 10;
  }

  //Display the alarm time
  /*This is meant for aesthetic purposes only. If the time is 3:59:59AM, before it hit's 4:00:00AM it will reset back to 3:00:00AM.
  I did this because I want the setting of the game to be played at that time. */
  display() {
    push();
    fill(this.r, this.g, this.b);
    textFont(this.alarmtimeFont);
    textAlign(CENTER);
    textSize(this.size);
    //Create a variable for hours,minutes,and seconds
    //Pre-determine what time of day it is. It will always start at 3:X:X AM
    let hour = "3";
    //Minutes and seconds based on real life
    let min = minute();
    let sec = second();
    //Add a 0 before the minute or second, if it is less than 10. This gives off a more realistic alarm clock look.
    if (min < this.timeInteger) {
      min = "0" + min;
    } else if (sec < this.timeInteger) {
      sec = "0" + sec;
    }
    //Create the text with the hour,min,sec variables. After apply the : between each and AM for a digital look.
    text(hour + ":" + min + ":" + sec + " AM", this.x, this.y);
    pop();
  }
}
