//Class for the prerequisite warning that displays if a task or entity cannot yet be interacted with.
class Prerequisite {
  constructor(w, h, x, y, prerequisiteImage) {
    //Dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
    //Image
    this.prerequisiteImage = prerequisiteImage;
  }

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
}
