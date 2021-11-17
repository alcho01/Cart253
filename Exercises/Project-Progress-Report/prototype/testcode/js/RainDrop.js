class RainDrop {

  constructor() {
  //position of drop
    this.x = random(0, width);
    this.y = random(100, 800);
}

  //Display the drop
  display() {
    push();
    noStroke();
    fill(255);
  //Play with the numbers to change shape of the drop
    ellipse(this.x, this.y, random(1, 2), random(2, 4));
    pop();
  }

  //Move the drop with speed
  move() {
    this.speed = random(5, 10);
    this.y = this.y + this.speed;
    //Reset the position
    if (this.y > height) {
      this.y = random(0, -height);
    }
  }
}
