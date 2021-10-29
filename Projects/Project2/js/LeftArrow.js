class LeftArrow extends Arrow {

  constructor(w,h,x,y,arrowleftImage,arrowLhoverImage){
    super(w,h,y);
    //position
    this.x = x;
    //images
    this.arrowleftImage = arrowleftImage;
    this.arrowLhoverImage = arrowLhoverImage;

  }

  display() {
    push();
    imageMode(CENTER);
    image(this.arrowleftImage,this.x,this.y,this.width,this.height);
    pop();

    let d = dist(mouseX,mouseY,this.x,this.y);
    if (d < this.width/2) {
      imageMode(CENTER);
      image(this.arrowLhoverImage,this.x,this.y,this.width,this.height);
    }
  }
}
