//This is the class for Tetrafin(FishFood)
class TetraFin {
  constructor(x,y) {
    //Dimensions
    this.width = 20;
    this.height = 20;
    //Position
    this.x = x;
    this.y = y;
    //Position at top
    this.top = 0;
    //Velocity
    this.vy = 0;
    this.speed = random(5,20);
    //Fill (Orangey)
    this.r = 209;
    this.g = 131;
    this.b = 6;
  }

  //Display the food
  display() {
    push();
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.width,this.height);
    pop();
  }

  //Move the food
  move() {
    this.vy = this.y + this.speed;
    this.y = this.vy;
  }

  //If the food hits the fish
  hit(koiFish) {
    //Calculate distance between fish and the food
      let d = dist(koiFish.x,koiFish.y,this.x,this.y);
      if (d < this.width / 2 + koiFish.width / 2) {
      //Make the fish grow if it crosses with the food
      koiFish.width = koiFish.width + koiFish.growth;
      koiFish.height = koiFish.height + koiFish.growth;
      //Add a food to the foodeaten
      koiFish.foodEaten = koiFish.foodEaten + koiFish.addFood;
      //position the food at the top
      this.y = this.top;
    }
    else if (koiFish.foodEaten == 15) {
      state = 'AquariumEnding'
      task2Complete = true;
      task3Availabe = true;
    }
  }
}
