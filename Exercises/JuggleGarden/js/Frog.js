class Frog {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay =  0;
    this.maxSpeed = 10;
    this.size = 50;
    this.active = true;
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

//Movement/Velocity of the frog
  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

//The bounce movement
  bounce() {
    if (this.y + this.size/2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;
    }
  }

//Displaying the frog
  display() {
    push();
    fill(29,219,95); //Light/Neon Green
    noStroke();
    ellipse(this.x,this.y,this.size);
    pop();
  }


}
