class LeftArrow extends Arrow {

  constructor(w,h,x,y,arrowleftImage,arrowLhoverImage){
    //Takes parameters from SuperClass "Arrow"
    super(w,h,y);
    //position
    this.x = x;
    //images
    this.arrowleftImage = arrowleftImage;
    this.arrowLhoverImage = arrowLhoverImage;
  }

  //Display the regular left arrow image
  display() {
    push();
    imageMode(CENTER);
    image(this.arrowleftImage,this.x,this.y,this.width,this.height);
    pop();

  //Calculate the distance of the mouse and the "arrowleftImage"
    let d = dist(mouseX,mouseY,this.x,this.y);
    if (d < this.width/2) {
  //If the mouse intersects with "arrowleftImage" display "arrowLhoverImage"
      imageMode(CENTER);
      image(this.arrowLhoverImage,this.x,this.y,this.width,this.height);
    }
  }
}
