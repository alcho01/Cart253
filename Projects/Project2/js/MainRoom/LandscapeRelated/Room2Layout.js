//The room on the left of the main room
class Room2Layout extends Apartment {

  constructor(w,h,x,y,room2layoutImage) {
  //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
  //Image
  this.room2layoutImage = room2layoutImage;
  }

  //Display the room 2 layout
  display() {
    push();
    imageMode(CENTER);
    image(this.room2layoutImage,this.x,this.y,this.width,this.height);
    pop();
  }

  mouseClicked() {
  //If the arrow is clicked go to the main room
    if (mouseX > 1170 && mouseX < 1275) {
    if (mouseY > 605 && mouseY < 710) {
      state = 'MainRoom'
      }
    }
  }
}
