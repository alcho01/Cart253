//Class for the hiddden message. Hidden unless the light is on in the main room.
class HiddenMessage {
  constructor(w, h, x, y, hiddenmessageImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //Image
    this.hiddenmessageImage = hiddenmessageImage;
  }

  //Display the hidden message
  display() {
    push();
    imageMode(CENTER);
    image(this.hiddenmessageImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
