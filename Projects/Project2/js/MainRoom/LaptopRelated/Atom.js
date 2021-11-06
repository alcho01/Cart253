//Class for atom. it displays when the application is clicked on.
class Atom extends Apartment{

  constructor(w,h,x,y,atomImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //Image
    this.atomImage = atomImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.exitbuttonX = 5;
    this.exitbuttonX2 = 80;
    this.exitbuttonY = 10
    this.exitbuttonY2 = 80;
  }

  //Display the atom page
  display() {
    push();
    imageMode(CENTER);
    image(this.atomImage,this.x,this.y,this.width,this.height);
    pop();
  }

  //mouseclicked functions
  mouseClicked() {
  //If the x button is pressed return to laptop menu
    if (mouseX > this.exitbuttonX && mouseX < this.exitbuttonX2) {
    if (mouseY > this.exitbuttonY && mouseY < this.exitbuttonY2) {
      state = 'LaptopMenuScreen'
      }
    }
  }
}
