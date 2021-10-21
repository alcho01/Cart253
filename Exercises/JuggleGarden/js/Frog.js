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

    if (this.y - this.size/2 > height) {
      this.active = false;
    }
  }

//The bounce movement
  bounce(lilypad) {
    if (this.x > lilypad.x - lilypad.width/2 &&
        this.x < lilypad.x + lilypad.width/2 &&
        this.y + this.size/2 > lilypad.y - lilypad.height/2&&
        this.y + this.size/2 < lilypad.y + lilypad.height/2) {

      //Bounce
      let dx = this.x - lilypad.x;
      this.vx = this.vx + map(dx,-lilypad.width/2,lilypad.width/2,-2,2);

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
