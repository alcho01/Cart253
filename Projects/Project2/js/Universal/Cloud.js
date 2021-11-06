//Class for the cloud
class Cloud {

  constructor(w,h,x,y) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //Velocity
    this.vx = random(2,6);
    //colour
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 105;
  }

  //Display a cloud
  display() {
    push();
    noStroke();
    fill(this.r,this.g,this.b,this.a);
    ellipse(this.x,this.y,this.width,this.height);
    pop();
  }

  //Update the movement
  update() {
    this.x = this.vx + this.x;
    if (this.x >= windowWidth) {
      this.x = -20;
      this.y = random(0,514);
    }
  }
}
