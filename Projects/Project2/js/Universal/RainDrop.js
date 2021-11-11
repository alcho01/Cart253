//Class for rain
class RainDrop {
  constructor(w, h, x, y) {
    //dimensions
    this.width = w;
    this.height = h;
    //position
    this.x = x;
    this.y = y;
    //colour (white)
    this.fill = 255;
  }

  //Display the raindrop
  display() {
    push();
    noStroke();
    fill(this.fill);
    ellipse(this.x, this.y, this.width, this.height);
    pop();
  }

  //Update the position of the raindrop
  move() {
    //Set A speed, a gravity and include it into the Y equation
    this.speed = random(5, 8); //Play around with these values until I like how it looks
    this.gravity = 1.25; //Play around with these values until I like how it looks
    this.y = this.y + this.speed * this.gravity;
    //If the drop surpasses the screen, reset it at the top
    if (this.y > height) {
      this.y = random(this.height);
      this.gravity = 0;
    }
  }
}
