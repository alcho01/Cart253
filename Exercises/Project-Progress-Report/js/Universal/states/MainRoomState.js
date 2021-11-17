//Class for the mainroom
class MainRoomState {
  constructor() {

  }

  //Display the required entities for this class
  display() {
    //Display the cityscape
    cityscape.display();

    //Display the raindrops //Need a for loop for arrays. Call the class functions in the for loop to display the raindrops
    for (let i = 0; i < rainDrop.length; i++) {
      rainDrop[i].display();
      rainDrop[i].move();
    }

    //Display the clouds
    for (let i = 0; i < cloud.length; i++) {
      cloud[i].display();
      cloud[i].update();
    }

    //Display the room
    mainroom.display();
    //Display the alert that the user can't fall asleep
    alertsleep.display();
    //Display the bed
    bed.display();
    //Display the bed lamp
    bedlamp.display();
    //Display the laptop
    laptop.display();
    //Display the laptop background
    laptopbg.display();
    //Display the alarm clock and the alarm time
    alarmclock.display();
    alarmtime.display();
    //Display the bed lamp lighting // Check if it is on or off
    bedlamplight.display();
    bedlamplight.checkbedlamplight();
    //Display the hidden message
    hiddenmessage.display();

    //Display the Arrows to switch between screens
    arrowleft.display();
    arrowright.display();
    //Display the mouse cursor
    mousecursor.display();
  }
}
