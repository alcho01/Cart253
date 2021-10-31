//display this laptop background on the laptop in the main room
class LaptopBackground {

  constructor(w,h,x,y,laptopbgImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //image
    this.laptopbgImage = laptopbgImage;
  }

  //Display the laptop background
  display() {
    push();
    imageMode(CENTER);
    image(this.laptopbgImage,this.x,this.y,this.width,this.height);
    pop();
  }

}
