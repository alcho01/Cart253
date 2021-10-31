//The bed that is displayed in the main room
class Bed {

  constructor(w,h,x,y,bedImage,bedhoverImage) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //Images
    this.bedImage = bedImage;
    this.bedhoverImage = bedhoverImage;
  }
  //Display the bed
  display() {
    push();
    imageMode(CENTER);
    image(this.bedImage,this.x,this.y,this.width,this.height);
    pop();

  //Calculate the distance of the mouse and the "bedImage"
    let d = dist(mouseX,mouseY,this.x,this.y);
    if (d < this.height/4) {
  //If the mouse intersects with "bedImage" display "bedhoverImage"
      imageMode(CENTER);
      image(this.bedhoverImage,this.x,this.y,this.width,this.height);
    }
  }
}
