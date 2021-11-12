//Class for the koi fish found in the aquarium
class KoiFish {
  constructor(w,h,x,y,koiFishLeftImage,koiFishRightImage) {
    //Dimensions
    this.width = w;
    this.height = h;
    //Growth
    this.growth = 5;
    //Position
    this.x = x;
    this.y = y;
    this.direction = 1;
    //border
    this.leftBorder = 1130;
    this.rightBorder = 150;
    //Speed
    this.speed = random(3, 10);
    //Images
    this.koiFishLeftImage = koiFishLeftImage;
    this.koiFishRightImage = koiFishRightImage;
    //Display the current image
    this.currentImage = koiFishRightImage;
    //text settings for the counter
    this.countX = 628;
    this.countY = 43;
    this.colour = 255;
    this.size = 20;
    //FoodEaten/FoodAte/
    this.foodEaten = 0;
    this.addFood = 1;
    //Set the number that it starts on when it can begin losing food so it does not go in the minus
    this.setFood = 1;
    //Set the lose foo parameter
    this.loseFood = -1;
    //Interval
    this.interval = 2;
  }

  //Display the fish
  display() {
    push();
    imageMode(CENTER);
    image(this.currentImage,this.x,this.y,this.width,this.height);
    pop();
  }

  //Display the counter
  displayCount() {
    push();
    noStroke();
    fill(this.colour);
    textSize(this.size);
    text(this.foodEaten, this.countX, this.countY);
    pop();
  }

  //The counter will decrease based on the frames elapsed //Help from : https://editor.p5js.org/aferriss/sketches/H18ePMyqG
  loseCount() {
    if (frameCount % (this.interval * 60) == 0) {
      if (this.foodEaten >= this.setFood) {
      this.foodEaten = this.foodEaten + this.loseFood;
    }
  }
}

  //How the fish moves
  move() {
    //Moving along the X axis
    this.x += (this.direction*this.speed);
    //If it hits the edge change the image
    if (this.x > this.leftBorder) {
      //Change the direction if it hits the edge
      this.direction = -this.direction;
      this.x += (this.direction*this.speed);
      //Display the current Image
      this.currentImage = koiFishLeftImage;
    }
    //If the x is less than 0 move it to the right
    if (this.x < this.rightBorder) {
      //Change the direction if it hits the edge
      this.direction = -this.direction;
      this.x += (this.direction*this.speed);
      //Display the current Image
      this.currentImage = koiFishRightImage;
    }
    //Moving along the Y axis (THIS PART OF THE CODE IS INSPIRED BY THIS: https://editor.p5js.org/creativecoding/sketches/bYIGQdDks)
    //Makes movement more organic
    this.y = this.y + sin(radians(frameCount * 4)) * 2;
  }
}
