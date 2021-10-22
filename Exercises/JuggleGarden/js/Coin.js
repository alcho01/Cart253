class Coin {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay =  0;
    this.maxSpeed = 10;
    this.size = 30;
    this.active = true;
    this.alpha =255;
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

//Move the shrink item
  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y - this.size/2 > 660) {
      this.x = random(0,width);
      this.y = random(-500,-100);
    }
  }

//On Hit Collect the coin
  hit(lilypad) {

    let d = dist(lilypad.x,lilypad.y,this.x,this.y);
    if (d < this.size/4 + lilypad.width/4) {
      lilypad.amount = lilypad.amount + lilypad.add; //Add coin to the amount of coins
      this.x = random(0,width);
      this.y = random(-500,-100);
  }
}

//On bounce coins will bounce off of the log
  bounce(log) {
    if (this.x > log.x - log.width/2 &&
        this.x < log.x + log.width/2 &&
        this.y + this.size/2 > log.y - log.height/2&&
        this.y + this.size/2 < log.y + log.height/2) {

    //Bounce
    let dx = this.x - log.x;
      this.vx = this.vx + map(dx,-log.width/2,log.width/2,-1.5,1.5); //LESS BOUNCE

      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  display() {
    push();
    noStroke();
    fill(227,121,0); //Orange
    ellipse(this.x,this.y,this.size);
    pop();
  }
}
