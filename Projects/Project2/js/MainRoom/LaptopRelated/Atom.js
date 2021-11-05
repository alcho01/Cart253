//Class for atom. it displays when the application is clicked on.
class Atom extends Apartment{

  constructor(w,h,x,y,atomImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //Image
    this.atomImage = atomImage;
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
    if (mouseX > 5 && mouseX < 80) {
    if (mouseY > 10 && mouseY < 80) {
      state = 'LaptopMenuScreen'
      }
    }
  }
}
