class Lilypad {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = 570;
    this.growth = 5;
    this.decrease = -90;
    this.amount = 0;
    this.add = 1;
    this.lives = 5;
  }

//Move with mouse Added Constraints
  move() {
    this.x = constrain(mouseX,0,1200);
    //this.y = constrain(mouseY,570,700);
  }

  display(){
    push();
    fill(50,168,82); //green
    noStroke();
    ellipse(this.x,this.y,this.width,this.height);
    pop();
  }

  scoreWin() {
    if(this.amount === 30) {
//state win (ending1)

    }
  }

  scoreDisplay() {
    push();
    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(35);
    text(this.amount,1180,40);
    pop();
  }

  health() {
    if(this.lives === 0) {
//state lose (ending2)

    }
  }

}
