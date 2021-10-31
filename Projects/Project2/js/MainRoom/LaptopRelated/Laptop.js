//Display the laptop in the main room
class Laptop {

  constructor(w,h,x,y,laptopImage,laptophoverImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //images
    this.laptopImage = laptopImage;
    this.laptophoverImage = laptophoverImage;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.laptopImage,this.x,this.y,this.width,this.height);
    pop();

  //Calculate the distance of the mouse and the "laptopImage"
    let d = dist(mouseX,mouseY,this.x,this.y);
    if (d < this.width/2) {
  //If the mouse intersects with "laptopImage" display "laptophoverImage"
      imageMode(CENTER);
      image(this.laptophoverImage,this.x,this.y,this.width,this.height);
    }
  }
}
