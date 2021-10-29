class RightArrow extends Arrow {

  constructor(w,h,x,y,arrowrightImage,arrowRhoverImage) {
    super(w,h,y);
    //position
    this.x = x;
    //images
    this.arrowrightImage = arrowrightImage;
    this.arrowRhoverImage = arrowRhoverImage;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.arrowrightImage,this.x,this.y,this.width,this.height);
    pop();

    let d = dist(mouseX,mouseY,this.x,this.y);
    if (d < this.width/2) {
      imageMode(CENTER);
      image(this.arrowRhoverImage,this.x,this.y,this.width,this.height);
    }
  }
}
