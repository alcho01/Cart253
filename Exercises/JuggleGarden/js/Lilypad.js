class Lilypad {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = 570;
    this.growth = 5;
    this.decrease = -90;
  }

//Move with mouse Added Constraints
  move() {
    this.x = constrain(mouseX,0,1200);
    //this.y = constrain(mouseY,570,700);
  }

  display(){
    push();
    fill(50,168,82); //green
    noStroke();
    ellipse(this.x,this.y,this.width,this.height);
    pop();
  }
}
