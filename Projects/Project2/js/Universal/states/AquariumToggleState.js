//Class for the aquarium state when active
class AquariumToggleState {
  constructor() {

  }

  //display the settings for the aquarium
  display() {
    aquariumLayout.display();
    aquariumLayout.mouseOver();

    //Display the koi fish/movement
    koiFish.display();
    koiFish.move();

    //Array for the fish food
    for (let i = 0; i < tetraFin.length; i++) {
      tetraFin[i].display();
      tetraFin[i].move();
      tetraFin[i].hit(koiFish);
    }

    //Display the count
    koiFish.displayCount();
    koiFish.loseCount();

    //The heads up display
    aquariumLayout.displayAquaBottom();
    aquariumLayout.displayAquaHelp();
  }
}
