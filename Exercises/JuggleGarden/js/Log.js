class Log {

  constructor(w,h,x) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = 620;
    this.vx = -5
    this.vx2 = 5
  }

//MOVE THE LOG WITH ARROW KEYS
  move() {
    this.xc = constrain(this.x,0,width);

    if(keyIsDown(LEFT_ARROW)) {
      this.x = this.xc + this.vx;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.xc + this.vx2;
    }
  }

//DISPLAY THE LOG
  display() {
    push();
    fill(122,97,26); //brownish
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }
}
