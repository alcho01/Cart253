//This is the class for Tetrafin(FishFood)
class TetraFin {
  constructor(x,y) {
    //Dimensions
    this.width = 20;
    this.height = 20;
    //Position
    this.x = x;
    this.y = y;
    //Velocity
    this.vy = 0;
    this.speed = random(5,20);
    //Fill (Orangey)
    this.r = 209;
    this.g = 131;
    this.b = 6;
    //FoodEaten
    this.foodEaten = 0;
  }

  //Display the food
  display() {
    push();
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.width,this.height);
    pop();
  }

  move() {
    this.vy = this.y + this.speed;
    this.y = this.vy;
  }
}
