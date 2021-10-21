class Frog {

//CODE FOR SPLASH() INSPIRED BY https://editor.p5js.org/monicawen/sketches/HkU-BCJqm  line 68

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay =  0;
    this.r = 0; //radius
    this.maxSpeed = 10;
    this.size = 50;
    this.active = true;
    this.opacity = 200;
    this.alpha =255;
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

    if (this.y - this.size/2 > 660) {
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

//Body
    push();
    noStroke();
    fill(29,219,95,this.alpha); //Light/Neon Green
    ellipse(this.x,this.y,this.size);
    pop();

//Feet
    push();
    noStroke();
    fill(29,219,95,this.alpha);
    ellipse(this.x - this.size/2, this.y + 20, this.size + 30,20);
    ellipse(this.x + this.size/2, this.y + 20, this.size + 30,20);
    pop();

//Eyes
    push();
    noStroke();
    fill(29,219,95,this.alpha);
    ellipse(this.x - this.size / 2.5, this.y - 18, this.size / 1.5);
    ellipse(this.x + this.size / 2.5, this.y - 18, this.size / 1.5);
    pop();

//Eyes2
    push();
    noStroke();
    fill(255,255,255,this.alpha);
    ellipse(this.x - this.size / 2, this.y, this.size / 1.2);
    ellipse(this.x + this.size / 2, this.y, this.size / 1.2);
    pop();

//Eyes3
    push();
    noStroke();
    fill(0,0,0);
    ellipse(this.x - this.size/6, this.y, this.size/6);
    ellipse(this.x + this.size/6, this.y, this.size/6);
    pop();

    if (this.y > 560) {
      this.alpha = this.alpha -50;
  }
}

  splash() {
    push();
    strokeWeight(2);
    stroke(230, this.opacity);
    noFill();
    if (this.y > 560) {
      ellipse(this.x, 570, this.r * 10, this.r /10);
      this.r++;
      this.opacity = this.opacity -10;
    pop();
    }

  }


}
