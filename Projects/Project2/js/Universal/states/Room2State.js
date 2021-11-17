//Class for room 2 state
class Room2State {
  constructor() {

  }

  //Display the required entities for this class
  display() {
    //Display the landscape for this room
    cityscape2.display();

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

    //Display the room layout
    room2Layout.display();
    //Display the prerequisite warning
    prerequisite.display();
    //Display the aquarium
    aquarium.display();
    //Display the coffee
    //coffee.display();

    //Display the Arrows to switch between screens
    arrowright.display();
    //Display the mouse cursor
    mousecursor.displayOnTwo();
  }
}
