//Class for the koi fish found in the aquarium
class KoiFish {
  constructor(w,h,x,y,koiFishLeftImage,koiFishRightImage) {
    //Dimensions
    this.width = w;
    this.height = h;
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
  }

  //Display the fish
  display() {
    push();
    imageMode(CENTER);
    image(this.currentImage,this.x,this.y,this.width,this.height);
    pop();
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
