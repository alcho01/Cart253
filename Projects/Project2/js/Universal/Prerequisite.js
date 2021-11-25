//Class for the prerequisite warning that displays if a task or entity cannot yet be interacted with.
class Prerequisite {
  constructor(w, h, x, y, prerequisiteImage) {
    //Initial prerequisite settings for room 2
    //Dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
    //Image
    this.prerequisiteImage = prerequisiteImage;

    //prerequisite settings for room 3

    //Mouse Positions
    //door
    this.doorX = 445;
    this.doorY = 258;
    this.doorSize = 350;

    //room 4 door 4
    this.room4DoorX = 917;
    this.room4DoorY = 305;
    this.room4DoorSize = 350;
  }

  //Initial prerequisite display
  //Display the prerequisite message if it meets the criteria
  display() {
    //Calculate distance between the mouse and the aquarium
    let d = dist(mouseX, mouseY, aquarium.x, aquarium.y);
    if (d < aquarium.width / 2) {
      //If task 2 is not available display the prereq warning
      if (task2Availabe == false) {
      push();
      imageMode(CENTER);
      image(this.prerequisiteImage, this.x, this.y, this.width, this.height);
      pop();
      }
    }
  }

  //Display the prerequisite message on room 3
  displayOnThree(){
    //Calculate distance between the mouse and the door
    //dDoor is the distance between the mouse and the door
    let dDoor = dist(mouseX, mouseY, this.doorX, this.doorY);
    if (dDoor < this.doorSize / 2) {
      //If the door is locked display the message
      if (doorUnlocked == false) {
        push();
        imageMode(CENTER);
        image(this.prerequisiteImage, this.x, this.y, this.width, this.height);
        pop();
      }
    }
    //dPhone is the distance between the mouse and the phone
    let dPhone = dist(mouseX, mouseY, phone.x, phone.y);
    if (dPhone < phone.width / 2) {
      if (task3Availabe == false) {
        push();
        imageMode(CENTER);
        image(this.prerequisiteImage, this.x, this.y, this.width, this.height);
        pop();
      }
    }
  }

  //Display the prerequisite message on the room 4 entrance
  displayOnFourEntrance() {
    //dRoom4Door is the distance between the mouse and the door on room 4
    let dRoom4Door = dist(mouseX, mouseY, this.room4DoorX, this.room4DoorY);
    if (dRoom4Door < this.room4DoorSize / 2) {
      if (task3Complete == false) {
        if (hiddenKeyObtained == false) {
          push();
          imageMode(CENTER);
          image(this.prerequisiteImage, this.x, this.y, this.width, this.height);
          pop();
        }
      }
    }
  }
}
