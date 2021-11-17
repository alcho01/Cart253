//Class for the phone code paper which is hidden in the purple flower pot (do not indicate it is clickable)
class PhoneCodePaper extends Apartment{
  constructor(w, h, x, y, phoneCodePaperImage) {
    //Take parameters from parent class, they share the same inputs
    super(w, h, x, y);
    //Image
    this.phoneCodePaperImage = phoneCodePaperImage;
    //Mouse Clicked Positions (X2 = further x point - Y2 = further y point)
    this.paperEdgeX = 252;
    this.paperEdgeX2 = 995;
    this.paperEdgeY = 243;
    this.paperEdgeY2 = 453;
  }

  //Display the paper
  display() {
    push();
    imageMode(CENTER);
    image(this.phoneCodePaperImage, this.x, this.y, this.width, this.height);
    pop();
  }

  mouseClicked() {
    //To close the paper
    if (mouseX > this.paperEdgeX && mouseX < this.paperEdgeX2) {
      if(mouseY > this.paperEdgeY && mouseY < this.paperEdgeY2) {
        state = "Room2";
      }
    }
  }
}
