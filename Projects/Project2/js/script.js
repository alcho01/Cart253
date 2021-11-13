/**
Title of Project 3:00AM CYCLE
Alex Cho

/========LEGEND========\
w = width               y = Y-Position
h = height              image = specified image
x = X-position          imageforhover = secondary image used for hover
font = specified font   r = red value
g = green value         b = blue value
a = alpha value
=======================/

References for Images/Fonts/Sounds/Coding Ideas

=============Images=============
Cursor Look http://www.rw-designer.com/cursor-view/166785.png
Cursor Interact http://www.rw-designer.com/cursor-view/146672.png
=============Fonts==============
Digital Clock Font : https://www.dafont.com/alarm-clock.font
Lofi font : https://www.dafont.com/digit-lofi.font
=============Sounds=============
Type soundFX https://freesound.org/people/Breviceps/sounds/447909/
Lamp soundFX https://freesound.org/people/PhillipArthur/sounds/541761/
Rain soundFX https://freesound.org/people/InspectorJ/sounds/346642/
aquarium soundFX https://freesound.org/people/7778/sounds/197804/
Paper soundFX https://freesound.org/people/razrox/sounds/197179/
Bear Thump soundFX https://freesound.org/people/DigestContent/sounds/458877/
Book Flip soundFX https://freesound.org/people/InspectorJ/sounds/416179/
============CodeIdeas===========
These are examples that helped me come up with my own ideas and that I took inspiration from.

Digital Clock Idea : https://editor.p5js.org/D_Snyder/sketches/Xtx2Zu9D5
Rain Idea: Took inspiration from the Juggle Garden exercise.
Username and password idea inspired by Pippin's code : https://editor.p5js.org/pippinbarr/sketches/k4ETSg3oc
Line 47 On the Koi Fish is inspired by this: https://editor.p5js.org/creativecoding/sketches/bYIGQdDks(Line 58)
FrameCount Help : https://editor.p5js.org/aferriss/sketches/H18ePMyqG
*/

"use strict";

/*=============================
BASICS/MISC
===============================*/

//Determine the canvas position
let canvasPosition = {
  x: 1280,
  y: 720,
};

//Array for clouds
let cloud = [];
let numClouds = 5;

//Array for raindrops
let rainDrop = [];
//Amount of raindrops
let numRainDrops = 200;
//sound volume
let songVolume = 0.6;
let sfxVolume = 0.5;

//Array for Tetrafin(FishFood)
let tetraFin = [];

//Create variables for the colour of the lamp lighting
let bedLampLightFill;
//CREATING colour values for when the bed lamp light is off
let bedLampOff = {
  r: 255,
  g: 255,
  b: 255,
  a: 0,
};
//CREATING colour values for when the bed lamp light is on
let bedLampOn = {
  r: 255,
  g: 255,
  b: 255,
  a: 50,
};

//Set the tasks to uncomplete
let task1Complete = false;
let task2Complete = false;
let task3Complete = false;

//Are these tasks availabe to do?
let task2Availabe = false;
let task3Availabe = false;

//Is the door unlocked
let doorUnlocked = false;

//Setting the username/password
let usernameCode = "sleep";
let passwordCode = "7259";

//What has been typed for the username
let userCurrentInput = "";
//What has been typed for the password
let passCurrentInput = "";

//What needs to be typed in the atom app
let atomCode = "image(object.image,object.x,object.y,object.w,object.h);";
//What has been typed for the code
let atomCurrentInput = "";

/*=============================
Classes to be called
===============================*/

//========UNIVERSAL============//
//mouse cursor to be called for a class
let mousecursor = undefined;
//Arrows to be called for a class
let arrowright = undefined;
let arrowleft = undefined;
//Prerequisite warning to be called for a class
let prerequisite = undefined;

//=========MAIN ROOM==========//
//Cityscape to be called for a class
let cityscape = undefined;
//Mainroom to be called for a class
let mainroom = undefined;
//Bed to be called for a class
let bed = undefined;
//bedlamp to be called for a class
let bedlamp = undefined;
//bedlamp lighting to be called for a class
let bedlamplight = undefined;
//Hidden Message to be called for a class
let hiddenmessage = undefined;
//Stack of paper called for a class
let paper = undefined;
//laptop to be called for a class
let laptop = undefined;
//laptop background to be called for a class
let laptopbg = undefined;
//laptopmenu to be called for a class
let laptopmenu = undefined;
//laptop login info to be called for a class (This is the screen when no input is entered)
let laptoploginfo = undefined;
//Passwordloginfo to be called for a class (This class is called when the username is properly encrypted )
let passwordlog = undefined;
//username to be called for a class
let username = undefined;
//password to be called for a class
let password = undefined;
//Alarmclock to be called for a class
let alarmclock = undefined;
//Alarmtime to be called for a class
let alarmtime = undefined;
//Alert/Pop up that you can't do that
let alertsleep = undefined;

//=========Laptop Apps==========//
//Lofify screen to be called for a class
let lofify = undefined;

//Atom entities to be called for a class
let atom = undefined;
let atomText = undefined;
let sudoku = undefined;

//=========ROOM 2==========//
//The same cityscape but positioned differently
let cityscape2 = undefined;
//Room2layout to be called for a class
let room2Layout = undefined;
//book to be called for a class
let book = undefined;
//coffee to be calle for a class
let coffee = undefined;
//Phone code to be called for a class
let phoneCodePaper = undefined;
//Teddybear to be called for a class
let bear = undefined;


//Aquarium Layout to be called for a class (this is when the aquarium sprite is pressed)
let aquariumLayout = undefined;
//Aquarium to be called for a class
let aquarium = undefined;
//Koi to be called for a class
let koiFish = undefined;
//Aquarium end screen to be called for a class
let aquariumEnding = undefined;

/*=============================
Fonts
===============================*/

let alarmtimeFont;
let lofiFont;

/*=============================
Sounds
===============================*/
//Sound of rain
let rainSFX = undefined;
//Sound of typing
let typeSFX = undefined;
//Sound of bedlamp chain
let bedlampSFX = undefined;
//Sound of Aquarium
let aquariumSFX = undefined;
//Sound of paper
let paperSFX = undefined;
//Sound of bear head hitting the floor
let thumpSFX = undefined;
//Sound of book flip
let bookSFX = undefined;
//Song list
let song1 = undefined;
let song2 = undefined;
let song3 = undefined;
let song4 = undefined;
let song5 = undefined;
let song6 = undefined;
/*=============================
Images
===============================*/

//=========UNIVERSAL==========//
//Image of arrows
let arrowrightImage = undefined;
let arrowRhoverImage = undefined;
let arrowleftImage = undefined;
let arrowLhoverImage = undefined;
//Image of prerequisite warning
let prerequisiteImage = undefined;


//=========MAIN ROOM==========//
//Images of cityscapes
let cityscapeImage = undefined;
//Image of rooms
let mainroomImage = undefined;
//Image of main room interactive objects
//Images of the bed
let bedImage = undefined;
let bedhoverImage = undefined;
//Images of the bedlamp
let bedlampImage = undefined;
let bedlamphoverImage = undefined;
//Image of the hidden message
let hiddenmessageImage = undefined;
//Image of the papers
let paperImage = undefined;
//Images of the laptop
let laptopImage = undefined;
let laptophoverImage = undefined;
//Image of the laptop background
let laptopbgImage = undefined;
//Image of laptop menu
let laptopmenuImage = undefined;
//Image of laptop login info
let laptoploginfoImage = undefined;
//Image of passwordlog
let passwordlogImage = undefined;
//Image of the alarm clock
let alarmclockImage = undefined;
//Image of no sleep alert
let alertsleepImage = undefined;

//=========Laptop Apps==========//
//Image of lofify in app
let lofifyImage = undefined;
//Image of atom app when opened
let atomImage = undefined;
let sudokuImage = undefined;

//=========ROOM 2==========//
//Image of cityscape2
let cityscape2Image = undefined;
//Image of room2layout
let room2LayoutImage = undefined;
//Image of book
let bookOpenImage = undefined;
//Image of coffee
let coffeeImage = undefined;
//Image of phone code paper
let phoneCodePaperImage = undefined;
//Image inside of the teddy bear head
let bearImage = undefined;
//Image of aquarium layout
let aquariumLayoutImage = undefined;
//Aquarium help message image
let aquariumHelpImage = undefined;
//Images of aquarium
let aquariumImage = undefined;
let aquariumHoverImage = undefined;
//Images of koi fish
let koiFishLeftImage = undefined;
let koiFishRightImage = undefined;
//Images of the aquarium endding
let aquariumEndImage = undefined;
let aquariumEndClickImage = undefined;

//What state is it in
let state = "MainRoom";

/*=============================
IMAGES/SOUNDS/FONTS TO PRELOAD
===============================*/

function preload() {
  /*=============================
Fonts
===============================*/

  //Loading a font for the alarm clock time
  alarmtimeFont = loadFont("assets/fonts/alarmclock.ttf");
  //Loading a font for lofify currently playing
  lofiFont = loadFont("assets/fonts/lofi.ttf");

  /*=============================
Sounds
===============================*/

  //Playlist songs found under lofify application
  song1 = loadSound("assets/sounds/CherryTree.mp3");
  song2 = loadSound("assets/sounds/OnMyMind.mp3");
  song3 = loadSound("assets/sounds/Reflections.mp3");
  song4 = loadSound("assets/sounds/Overcast.mp3");
  song5 = loadSound("assets/sounds/Mist.mp3");
  song6 = loadSound("assets/sounds/MidnightJourney.mp3");

  //Object sounds
  bedlampSFX = loadSound("assets/sounds/bedlampsfx.wav");
  rainSFX = loadSound("assets/sounds/Rain.wav");
  typeSFX = loadSound("assets/sounds/type.wav");
  aquariumSFX = loadSound("assets/sounds/fishtank.wav");
  paperSFX = loadSound("assets/sounds/Papers.wav");
  thumpSFX = loadSound("assets/sounds/thump.wav");
  bookSFX = loadSound("assets/sounds/bookFlip.wav");

  /*=============================
Images
===============================*/

  //Loading images of cityscapes
  cityscapeImage = loadImage("assets/images/Background/bgmain.png");
  cityscape2Image = loadImage("assets/images/Background/bg2.png");

  //Loading images of rooms
  mainroomImage = loadImage("assets/images/Rooms/MainRoom.png");
  room2LayoutImage = loadImage("assets/images/Rooms/Room2.png");

  //Loading images of main room interactive objects
  //Loading the bed images
  bedImage = loadImage("assets/images/Objects/bed.png");
  bedhoverImage = loadImage("assets/images/Objects/bedhover.png");
  //Loading the bedlamp images
  bedlampImage = loadImage("assets/images/Objects/lamp.png");
  bedlamphoverImage = loadImage("assets/images/Objects/lamphover.png");

  //Loading Hidden Message
  hiddenmessageImage = loadImage("assets/images/Objects/hiddenmessage.png");
  //Loading the inside of the bear image
  bearImage = loadImage("assets/images/Objects/teddyhead.png");
  //Loading the paper message
  paperImage = loadImage("assets/images/Objects/papers.png");

  //Loading the laptop images
  laptopImage = loadImage("assets/images/Objects/laptop.png");
  laptophoverImage = loadImage("assets/images/Objects/laptophover.png");
  laptopbgImage = loadImage("assets/images/Objects/laptopbg.gif");

  //Loading the laptop menu image
  laptopmenuImage = loadImage("assets/images/Objects/menuscreen.png");
  //Loading the laptop login info
  laptoploginfoImage = loadImage("assets/images/Objects/laptoplogin.png");
  //loading the passwordlog info
  passwordlogImage = loadImage("assets/images/Objects/passwordstate.png");

  //Loading the phone code paper
  phoneCodePaperImage = loadImage("assets/images/Objects/phonecode.png");

  //Loading the lofify screen
  lofifyImage = loadImage("assets/images/Objects/lofify.png");
  //Loading the atom screen
  atomImage = loadImage("assets/images/Objects/atom.png");
  //Loading the sudoku image
  sudokuImage = loadImage("assets/images/Objects/sudoku.png");

  //Loading the alarm clock image
  alarmclockImage = loadImage("assets/images/Objects/alarmclock.png");

  //Loading the alert sleep image
  alertsleepImage = loadImage("assets/images/Objects/nosleep.png");
  //Loading the prerequisite warning image
  prerequisiteImage = loadImage("assets/images/Objects/prerequisitewarning.png");

  //Loading the aquarium images
  aquariumLayoutImage = loadImage("assets/images/Objects/aquariumbg.png");
  aquariumHelpImage = loadImage("assets/images/Objects/aquariumhelp.png");
  aquariumImage = loadImage("assets/images/Objects/aquarium.png");
  aquariumHoverImage = loadImage("assets/images/Objects/aquariumhover.png");
  koiFishLeftImage = loadImage("assets/images/Objects/fishleft.png");
  koiFishRightImage = loadImage("assets/images/Objects/fishright.png");
  aquariumEndImage = loadImage("assets/images/Objects/aquariumending.png");
  aquariumEndClickImage = loadImage("assets/images/Objects/aquariumendingclicked.png");

  //Loading the open book image
  bookOpenImage = loadImage("assets/images/Objects/colorbook.png");
  //Loading the coffee image
  coffeeImage = loadImage("assets/images/Objects/coffee.gif");

  //Loading images of arrows
  arrowrightImage = loadImage("assets/images/Arrows/arrowright.png");
  arrowRhoverImage = loadImage("assets/images/Arrows/arrowrighthover.png");
  arrowleftImage = loadImage("assets/images/Arrows/arrowleft.png");
  arrowLhoverImage = loadImage("assets/images/Arrows/arrowlefthover.png");
}

/*=====================================
SETTING UP! CANVAS|CLASSES|ARRAYS|BEDLAMPLIGHTS
======================================*/
function setup() {
  //Creating the canvas
  createCanvas(canvasPosition.x, canvasPosition.y);

  //Setting up sounds (Volume,Loops)
  //Set the volume down a bit
  rainSFX.setVolume(sfxVolume);
  //Loop the rain SFX
  rainSFX.loop();
  //Sets the song volume lower
  song1.setVolume(songVolume);
  song2.setVolume(songVolume);
  song3.setVolume(songVolume);
  song4.setVolume(songVolume);
  song5.setVolume(songVolume);
  song6.setVolume(songVolume);
  //Determing a set fill for the bed lamp light before toggling it
  bedLampLightFill = color(
    bedLampOff.r,
    bedLampOff.g,
    bedLampOff.b,
    bedLampOff.a
  );

  /*=============================
          UNIVERSAL
===============================*/

  //Mouse cursor
  mousecursor = new MouseCursor();

  //Prerequisite warning to be called for a class (w,h,x,y,image)
  prerequisite = new Prerequisite(300, 60, 160, 40, prerequisiteImage);

  //RainDrop to be called from class
  //Create a for loop if i is less than 200 add a new rain drop
  //Parameters (w,h,x,y)
  for (let i = 0; i < numRainDrops; i++) {
    rainDrop[i] = new RainDrop(
      random(1, 4),
      random(5, 8),
      random(0, width),
      random(50, 800)
    );
  }

  //Citylight to be called for a class (w,h,x,y)
  for (let i = 0; i < numClouds; i++) {
    cloud[i] = new Cloud(180, 50, random(windowWidth), random(0, 514));
  }

  //Arrows class parameters (w,h,x,y,image,imageforhover)
  arrowleft = new LeftArrow(
    100,
    100,
    60,
    660,
    arrowleftImage,
    arrowLhoverImage
  );
  arrowright = new RightArrow(
    100,
    100,
    1220,
    660,
    arrowrightImage,
    arrowRhoverImage
  );

  /*=============================
          MAIN ROOM
===============================*/

  //Cityscapes class parameters (w,h,x,y,image)
  cityscape = new Cityscape(1280, 720, 640, 360, cityscapeImage);

  //Rooms class parameters (w,h,x,y,image)
  mainroom = new Mainroom(1280, 720, 640, 360, mainroomImage);

  //Bed parameters (w,h,x,y,image,imageforhover)
  bed = new Bed(600, 400, 585, 554.8, bedImage, bedhoverImage);
  //Bed lamp parameters (w,h,x,y,image,imageforhover)
  bedlamp = new BedLamp(70, 100, 520, 370, bedlampImage, bedlamphoverImage);
  //Bed lamp light parameters (w,h,x,y)
  bedlamplight = new BedLampLight(1280, 720, 0, 0);
  //Hidden message parameters (w,h,x,y,image)
  hiddenmessage = new HiddenMessage(100, 100, 600, 50, hiddenmessageImage);
  //Papers parameters (w,h,x,y,image)
  paper = new Paper(1280, 720, 640, 360, paperImage);

  //Laptop parameters(w,h,x,y,image,imageforhover)
  laptop = new Laptop(80, 90, 180, 465, laptopImage, laptophoverImage);
  //Laptop screen saver parameters (w,h,x,y,image)
  laptopbg = new LaptopBackground(56, 37, 180, 454, laptopbgImage);
  //laptop menu parameteres (w,h,x,y,image)
  laptopmenu = new LaptopMenu(1280, 720, 640, 360, laptopmenuImage);
  //Laptop login info screen parameters (w,h,x,y,image)
  laptoploginfo = new LaptopLogin(1280, 720, 640, 360, laptoploginfoImage);
  //Once the username is correct this screen will overlay to type the password (w,h,x,y,image)
  passwordlog = new PasswordLog(1280, 720, 640, 360, passwordlogImage);
  //Login Info username and password (x,y)
  username = new Username(330, 1240);
  password = new Password(450, 1240);

  //Lofify screen (w,h,x,y,image)
  lofify = new Lofify(1280, 720, 640, 360, lofifyImage);

  //atom screen (w,h,x,y,image)
  atom = new Atom(1280, 720, 640, 360, atomImage);
  //atom text (x,y)
  atomText = new AtomText(250, 533);
  //Sudoku (w,h,x,y,image)
  sudoku = new Sudoku(350, 350, 950, 350, sudokuImage);

  //The alarm clock parameters (w,h,x,y,image)
  alarmclock = new AlarmClock(100, 36, 650, 400, alarmclockImage);
  //The time on the alarm clock
  //Parameters(x,y,font)
  alarmtime = new AlarmTime(650, 405, alarmtimeFont);

  //alertsleep parameters (w,h,x,y,image)
  alertsleep = new AlertSleep(400, 100, 210, 60, alertsleepImage);

  /*=============================
            ROOM 2
===============================*/

  //cityscape2 parameters (w,h,x,y,image)
  cityscape2 = new Cityscape2(1280, 720, 640, 360, cityscape2Image);
  //room2layout parameters (w,h,x,y,image)
  room2Layout = new Room2Layout(1280, 720, 640, 360, room2LayoutImage);
  //book parameters (w,h,x,y,image)
  book = new Book(1280, 720, 640, 360,bookOpenImage);
  //coffee image parameters (w,h,x,y,image)
  coffee = new Coffee(60, 60, 573, 570, coffeeImage);
  //Phone code paper parameters (w,h,x,y,image)
  phoneCodePaper = new PhoneCodePaper(1280, 720, 640, 360, phoneCodePaperImage);
  //bear parameters (w,h,x,y,image)
  bear = new Bear(1280, 720, 640, 360, bearImage);
  //Aquarium Layout parameters (w,h,x,y,image)
  aquariumLayout = new AquariumLayout(1280, 720, 640, 360, aquariumLayoutImage,aquariumHelpImage);
  //Aquarium parameters (w,h,x,y,image,hoverimage)
  aquarium = new Aquarium(180, 130, 773, 460, aquariumImage, aquariumHoverImage);
  //Koi fish parameters (w,h,x,y,image,image2)
  koiFish = new KoiFish(150, 100, 640, 360, koiFishLeftImage, koiFishRightImage);
  //Aquarium ending parameters (w,h,x,y,image,image clicked)
  aquariumEnding = new AquariumEnding(1280, 720, 640, 360, aquariumEndImage, aquariumEndClickImage);
}

function draw() {
  //Organize what states the simulation consists of...
  //The room the user begins on
  if (state == "MainRoom") {
    mainRoom();
  }
  //If the laptop is pressed go to the log on screen
  else if (state == "LaptopLogIn") {
    laptoplogin();
  }
  //If the username is correct overlay this screen to type the password
  else if (state == "PasswordState") {
    passwordlog.display();
    password.display();
  }
  //go to the laptop menu screen
  else if (state == "LaptopMenuScreen") {
    laptopmenu.display();
  }
  //from the laptop menu screen go to the app lofify
  else if (state == "LofifyScreen") {
    lofify.display();
  }
  //If atom app is pressed go to the atom screen
  else if (state == "AtomScreen") {
    atomMenu();
  }
  //If the left arrow is pressed go to room 2
  else if (state == "Room2") {
    room2();
  }
  //If the aquarium is pressed go to the aquarium screen
  else if (state == 'Aquarium') {
    aquariumToggle();
  }
  //If the user completes the aquarium task prompt this
  else if (state == 'AquariumEnding') {
    aquariumEnding.display();
    aquariumSFX.stop();
  }
  //Open up the book
  else if (state == 'OpenBook') {
    book.display();
  }
  //Open up the message
  else if (state == 'PlantMessage') {
    phoneCodePaper.display();
  }
  //Open up the papers
  else if (state == "PaperShow") {
    paper.display();
  }
  //Take the head off of the bear
  else if (state == "BearHead") {
    bear.display();
  }
}

//Everything relevant to the main room - All needs to be in the same function because it is going to be converted to a state
function mainRoom() {
  //Display the cityscape
  cityscape.display();

  //Display the raindrops //Need a for loop for arrays. Call the class functions in the for loop to display the raindrops
  for (let i = 0; i < rainDrop.length; i++) {
    rainDrop[i].display();
    rainDrop[i].move();
  }

  //Display the clouds
  for (let i = 0; i < cloud.length; i++) {
    cloud[i].display();
    cloud[i].update();
  }

  //Display the room
  mainroom.display();
  //Display the alert that the user can't fall asleep
  alertsleep.display();
  //Display the bed
  bed.display();
  //Display the bed lamp
  bedlamp.display();
  //Display the laptop
  laptop.display();
  //Display the laptop background
  laptopbg.display();
  //Display the alarm clock and the alarm time
  alarmclock.display();
  alarmtime.display();
  //Display the bed lamp lighting // Check if it is on or off
  bedlamplight.display();
  bedlamplight.checkbedlamplight();
  //Display the hidden message
  hiddenmessage.display();

  //Display the Arrows to switch between screens
  arrowleft.display();
  arrowright.display();
  //Display the mouse cursor
  mousecursor.display();
}

//Everything relevant to room 2
function room2() {
  //Display the landscape for this room
  cityscape2.display();

  //Display the raindrops //Need a for loop for arrays. Call the class functions in the for loop to display the raindrops
  for (let i = 0; i < rainDrop.length; i++) {
    rainDrop[i].display();
    rainDrop[i].move();
  }

  //Display the clouds
  for (let i = 0; i < cloud.length; i++) {
    cloud[i].display();
    cloud[i].update();
  }

  //Display the room layout
  room2Layout.display();
  //Display the prerequisite warning
  prerequisite.display();
  //Display the aquarium
  aquarium.display();
  //Display the coffee
  coffee.display();

  //Display the Arrows to switch between screens
  arrowright.display();
  //Display the mouse cursor
  mousecursor.displayOnTwo();
}

//Everything relevant to the laptop login info screen
function laptoplogin() {
  //Display the laptop login info
  laptoploginfo.display();
  username.display();
}

//Everything relevant to the atom menu screen
function atomMenu() {
  atom.display();
  atomText.display();
}

//Everything relevant to the aquarium when clicked
  function aquariumToggle() {
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

/*=====P5 Functions====*\
keyTyped,keyPressed,mouseClicked
\*=====================*/

//When a key is typed it will display on the LaptopLogIn screen. This needs to be done in the script.js file for it to work.
function keyTyped() {
  if (state == "LaptopLogIn") {
    //Play typing sound
    typeSFX.play();
    userCurrentInput += key;
  } else if (state == "PasswordState") {
    //If it is under the password state allow this
    //Play typing sound
    typeSFX.play();
    passCurrentInput += key;
  } else if (state == "AtomScreen") {
    //Play typing sound
    typeSFX.play();
    atomCurrentInput += key;
  }
}

//When the backspace key is pressed it will delete the characters. *Trying to fix it so it deletes one character at a time keep getting NaN
function keyPressed() {
  if (keyCode == 8) {
    userCurrentInput = "";
    passCurrentInput = "";
    atomCurrentInput = "";
  }
}

//Mouse Interaction
function mouseClicked() {
  userStartAudio();
  //If the state is 'MainRoom' do the following orders
  if (state == "MainRoom") {
    mainroom.mouseClicked();
  }
  //username state
  if (state == "LaptopLogIn") {
    //Return the cursor to the default
    cursor();
    laptoploginfo.mouseClicked();
  }
  //password state
  if (state == "PasswordState") {
    passwordlog.mouseClicked();
  }
  //If the Log out button is pressed on the laptop menu screen do the following sequence...
  if (state == "LaptopMenuScreen") {
    laptopmenu.mouseClicked();
  }
  //Functionality with mouse clicked on the lofify screen
  if (state == "LofifyScreen") {
    lofify.mouseClicked();
  }
  //Functionality with mouse clicked on the atom screen
  if (state == "AtomScreen") {
    atom.mouseClicked();
  }
  //Room 2 mouse functionality
  if (state == "Room2") {
    room2Layout.mouseClicked();
  }
  //Aquarium mouse functionality
  if (state == "Aquarium") {
    //Return the cursor to the default
    cursor();
    aquariumLayout.mouseClicked();
  }
  //AquariumEnding mouse functionality
  if (state == "AquariumEnding") {
    aquariumEnding.mouseClicked();
  }
  //To close the book
  if (state == "OpenBook") {
    cursor();
    book.mouseClicked();
  }
  //To close the phonecodepaper
  if (state == "PlantMessage") {
    phoneCodePaper.mouseClicked();
  }
  //To close the paper messages
  if (state == "PaperShow") {
    cursor();
    paper.mouseClicked();
  }
  //To get out of the bear body
  if (state == "BearHead") {
    cursor();
    bear.mouseClicked();
  }
}

//Functionality for mousePressed (x,y)
function mousePressed() {
  //Constrain parameters
  let xc = constrain(mouseX,0,canvasPosition.x);
  let yc = constrain(mouseY,0,canvasPosition.y);
  //Generate a new food if pressed from the class
  let newtetraFin = new TetraFin(random(58, 1232), 50);
  //If the mouse is in the canvas and pressed display a new food, else do not.
  if (state == "Aquarium") {
    if (mouseX == xc) {
      if (mouseY == yc) {
        tetraFin.push(newtetraFin);
      }
    }
  }
}

//Functionality for double clicked.
function doubleClicked() {
  if (state == "LofifyScreen") {
    lofify.doubleClicked();
  }
}
