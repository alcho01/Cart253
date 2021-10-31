//The class for the laptop menu screen which is accessed after the username and password are correct
class LaptopMenu extends Apartment{

  constructor(w,h,x,y,laptopmenuImage) {
    //Takes parameters from SuperClass "Apartment"
    super(w,h,x,y);
    //image
    this.laptopmenuImage = laptopmenuImage;
  }

  //Display the laptop menu screen
  display() {
    push();
    imageMode(CENTER);
    image(this.laptopmenuImage,this.x,this.y,this.width,this.height);
    pop();
  }
}
