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
Bag Zip soundFX https://freesound.org/people/nc3studios08/sounds/581281/
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
let numRainDrops = 120;

//sound volume
let songVolume = 0.1;
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
let task4Complete = false;

//Are these tasks availabe to do?
let task2Availabe = false;
let task3Availabe = false;
let task4Available = false;

//Is the door unlocked
let doorUnlocked = false;

//Prevent the hanging fish from being clicked before task 3 is complete
let hangingFish = false;

//Delete Key
let keyDel = -1;

//Setting the username/password for computer
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

//Setting up the password for the phone and what has been typed
let phoneCode = "371629";
let phoneCurrentInput = "";

//Answers and Current Input for Crossy Game // a1 means answer1 and so on
let a1 = "Z";
let a2 = "Red";
let a3 = "Zesty";
let a4 = "25";
let a5 = "Crossy";
let answerCurrentInput = "";

/*=============================
Classes to be called
===============================*/

//========UNIVERSAL============//
//mouse cursor to be called for a class
let mousecursor;
//Arrows to be called for a class
let arrowright;
let arrowleft;
//Prerequisite warning to be called for a class
let prerequisite;

//=========MAIN ROOM==========//
//Cityscape to be called for a class
let cityscape;
//Mainroom to be called for a class
let mainroom;
//Bed to be called for a class
let bed;
//bedlamp to be called for a class
let bedlamp;
//bedlamp lighting to be called for a class
let bedlamplight;
//Hidden Message to be called for a class
let hiddenmessage;
//Stack of paper called for a class
let paper;
//laptop to be called for a class
let laptop;
//laptop background to be called for a class
let laptopbg;
//laptopmenu to be called for a class
let laptopmenu;
//laptop login info to be called for a class (This is the screen when no input is entered)
let laptoploginfo;
//Passwordloginfo to be called for a class (This class is called when the username is properly encrypted )
let passwordlog;
//username to be called for a class
let username;
//password to be called for a class
let password;
//Alarmclock to be called for a class
let alarmclock;
//Alarmtime to be called for a class
let alarmtime;
//Alert/Pop up that you can't do that
let alertsleep;

//=========Laptop Apps==========//
//Lofify screen to be called for a class
let lofify;

//Atom entities to be called for a class
let atom;
let atomText;
let sudoku;

//=========ROOM 2==========//
//The same cityscape but positioned differently
let cityscape2;
//Room2layout to be called for a class
let room2Layout;
//book to be called for a class
let book;
//coffee to be calle for a class
let coffee;
//Phone code to be called for a class
let phoneCodePaper;
//Teddybear to be called for a class
let bear;

//Aquarium Layout to be called for a class (this is when the aquarium sprite is pressed)
let aquariumLayout;
//Aquarium to be called for a class
let aquarium;
//Koi to be called for a class
let koiFish;
//Aquarium end screen to be called for a class
let aquariumEnding;

//=========ROOM 3==========//
//The same cityscape but positioned differently
let cityscape3;
//Room3layout to be called for a class
let room3Layout;
//Bag note to be called for a class
let bagNote;

//Phone
//Phone to be called for a class
let phone;
//Phone Login Menu
let phoneLoginMenu;
//Phone Home
let phoneHome;
//Phone Photos
let phonePhoto;
//Phone Notes
let phoneNote;
//Crossy Game Stuff
let crossyMenu;
let crossyHelp;
let crossyFooled;
let crossyQuiz;
let crossyEnd;

//=======State Stuff======//

//States
let preTitle;
let titleState;
let instructions;
let mainRoomState;
let room2State;
let room3State;
let aquariumToggleState;

//Display the state
let stateShow;

//Enable the mouse functionality(CLICKED) for given state
let stateMouseInteraction;

//Enable the mouse functionality(PRESSED) for given state
let stateMousePressedInteraction;

//Enable the key typed functionality for given state
let stateKeyTypedInteraction;

//What state is it in
let state = "PreTitle";

/*=============================
Fonts
===============================*/

let alarmtimeFont;
let lofiFont;

/*=============================
Sounds
===============================*/
//Sound of rain
let rainSFX;
//Sound of typing
let typeSFX;
//Sound of bedlamp chain
let bedlampSFX;
//Sound of Aquarium
let aquariumSFX;
//Sound of paper
let paperSFX;
//Sound of bear head hitting the floor
let thumpSFX;
//Sound of book flip
let bookSFX;
//Bag zip sound
let bagZipSFX;
//Song list
let titleSong;
let song1;
let song2;
let song3;
let song4;
let song5;
let song6;
/*=============================
Images
===============================*/

//=========UNIVERSAL==========//
//Image of arrows
let arrowrightImage;
let arrowRhoverImage;
let arrowleftImage;
let arrowLhoverImage;
//Image of prerequisite warning
let prerequisiteImage;

//=========TITLE SCREEN==========//
//Image of logo
let logoImage;
//Title screen buttons
let titleButtonsImage;
//instruction screen
let instructionsImage;

//=========MAIN ROOM==========//
//Images of cityscapes
let cityscapeImage;
//Image of rooms
let mainroomImage;
//Image of main room interactive objects
//Images of the bed
let bedImage;
let bedhoverImage;
//Images of the bedlamp
let bedlampImage;
let bedlamphoverImage;
//Image of the hidden message
let hiddenmessageImage;
//Image of the papers
let paperImage;
//Images of the laptop
let laptopImage;
let laptophoverImage;
//Image of the laptop background
let laptopbgImage;
//Image of laptop menu
let laptopmenuImage;
//Image of laptop login info
let laptoploginfoImage;
//Image of passwordlog
let passwordlogImage;
//Image of the alarm clock
let alarmclockImage;
//Image of no sleep alert
let alertsleepImage;

//=========Laptop Apps==========//
//Image of lofify in app
let lofifyImage;
//Image of atom app when opened
let atomImage;
let sudokuImage;

//=========ROOM 2==========//
//Image of cityscape2
let cityscape2Image;
//Image of room2layout
let room2LayoutImage;
//Image of book
let bookOpenImage;
//Image of coffee
let coffeeImage;
//Image of phone code paper
let phoneCodePaperImage;
//Image inside of the teddy bear head
let bearImage;
//Image of aquarium layout
let aquariumLayoutImage;
//Aquarium help message image
let aquariumHelpImage;
//Images of aquarium
let aquariumImage;
let aquariumHoverImage;
//Images of koi fish
let koiFishLeftImage;
let koiFishRightImage;
//Images of the aquarium endding
let aquariumEndImage;
let aquariumEndClickImage;

//=========ROOM 3==========//
//Image of cityscape3
let cityscape3Image;
//Image of room3layout
let room3LayoutImage;
//Image of the bag note
let bagNoteImage;
//Images of the phone
let phoneImage;
let phoneHoverImage;
//Image of phone loginScreen
let phoneLoginImage;
//Image of phone homescreen
let phoneHomeImage;
//Image of phone Photos
let phonePhotoImage;
//Image of phone Notes
let phoneNoteImage;
//Image of Crossy Menu
let crossyMenuImage;
//Image of Crossy Help
let crossyHelpImage;
//Image of Crossy Fooled
let crossyFooledImage;
//Image of Crossy Quiz Background
let crossyQuizImage;
//Image of Crossy End
let crossyEndImage;

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

  //Song that plays during title screen
  titleSong = loadSound("assets/sounds/MidnightJourney.mp3");

  //Object sounds
  bedlampSFX = loadSound("assets/sounds/bedlampSFX.wav");
  rainSFX = loadSound("assets/sounds/Rain.wav");
  typeSFX = loadSound("assets/sounds/type.wav");
  aquariumSFX = loadSound("assets/sounds/fishtank.wav");
  paperSFX = loadSound("assets/sounds/Papers.wav");
  thumpSFX = loadSound("assets/sounds/thump.wav");
  bookSFX = loadSound("assets/sounds/bookFlip.wav");
  bagZipSFX = loadSound("assets/sounds/bagZipper.wav");

  /*=============================
Images
===============================*/

  // Title Screen Images \\
  //Loading the logo image
  logoImage = loadImage("assets/images/Objects/titlelogo.png");
  //Loading the title button images
  titleButtonsImage = loadImage("assets/images/Objects/titlebuttons.png");
  //Loading the instructions
  instructionsImage = loadImage("assets/images/Objects/instructions.png");

  //Loading images of cityscapes
  cityscapeImage = loadImage("assets/images/Background/bgmain.png");
  cityscape2Image = loadImage("assets/images/Background/bg2.png");
  cityscape3Image = loadImage("assets/images/Background/bg3.png");

  //Loading images of rooms
  mainroomImage = loadImage("assets/images/Rooms/MainRoom.png");
  room2LayoutImage = loadImage("assets/images/Rooms/Room2.png");
  room3LayoutImage = loadImage("assets/images/Rooms/Room3.png");

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
  //Loading the bag note image
  bagNoteImage = loadImage("assets/images/Objects/bagnote.png");

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
  //Loading the phone images
  phoneImage = loadImage("assets/images/Objects/phone.png");
  phoneHoverImage = loadImage("assets/images/Objects/phoneHover.png");
  phoneLoginImage = loadImage("assets/images/Objects/phonelogin.png");
  phoneHomeImage = loadImage("assets/images/Objects/phonehome.png");
  phonePhotoImage = loadImage("assets/images/Objects/phonephotos.png");
  phoneNoteImage = loadImage("assets/images/Objects/phonenotes.png");
  //CrossyGame
  crossyMenuImage = loadImage("assets/images/Objects/crossymenu.png");
  crossyHelpImage = loadImage("assets/images/Objects/crossyhelp.png");
  crossyFooledImage = loadImage("assets/images/Objects/crossytwist.png");
  crossyQuizImage = loadImage("assets/images/Objects/quizbg.png");
  crossyEndImage = loadImage("assets/images/Objects/quizComplete.png");

  //Loading the lofify screen
  lofifyImage = loadImage("assets/images/Objects/Lofify.png");
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
  userStartAudio();
  //Creating the canvas
  createCanvas(canvasPosition.x, canvasPosition.y);

  //Setting up sounds (Volume,Loops)
  //Set the volume down a bit
  rainSFX.setVolume(sfxVolume);
  bagZipSFX.setVolume(sfxVolume);
  //Sets the song volume lower
  song1.setVolume(songVolume);
  song2.setVolume(songVolume);
  song3.setVolume(songVolume);
  song4.setVolume(songVolume);
  song5.setVolume(songVolume);
  song6.setVolume(songVolume);

  //Loop the rain SFX and play at title
  //rainSFX.loop();
  //Play At Title and loop on title
  titleSong.setVolume(songVolume);
  //titleSong.play();
  //titleSong.loop();

  //Determing a set fill for the bed lamp light before toggling it
  bedLampLightFill = color(bedLampOff.r, bedLampOff.g, bedLampOff.b, bedLampOff.a);

  /*=============================
          UNIVERSAL
===============================*/

  //STATES
  //parameters (w,h,x,y)
  preTitle = new PreTitle(1280, 720, 640, 360);
  //parameters (w,h,image1,image2)
  titleState = new TitleState(1280, 720, logoImage, titleButtonsImage);
  //parameters (w,h,x,y,image)
  instructions = new Instructions(1280, 720, 640, 360, instructionsImage);
  mainRoomState = new MainRoomState();
  room2State = new Room2State();
  room3State = new Room3State();
  aquariumToggleState = new AquariumToggleState();

  //What state is displayed
  stateShow = new StateShow();
  //What state is displayed for mouse interactivity(CLICKED)
  stateMouseInteraction = new StateMouseInteraction();
  //What state is displayed for when the mouse is being pressed
  stateMousePressedInteraction = new StateMousePressedInteraction();
  //What state is displayed for when a key is being typed
  stateKeyTypedInteraction = new StateKeyTypedInteraction();


  //Mouse cursor
  mousecursor = new MouseCursor();

  //Prerequisite warning to be called for a class (w,h,x,y,image)
  prerequisite = new Prerequisite(300, 60, 160, 40, prerequisiteImage);

  //RainDrop to be called from class
  //Create a for loop if i is less than 150 add a new rain drop
  //Parameters (w,h,x,y)
  for (let i = 0; i < numRainDrops; i++) {
    rainDrop[i] = new RainDrop(random(1, 4), random(5, 8), random(0, width), random(50, 800));
  }

  //Citylight to be called for a class (w,h,x,y)
  for (let i = 0; i < numClouds; i++) {
    cloud[i] = new Cloud(180, 50, random(windowWidth), random(0, 514));
  }

  //Arrows class parameters (w,h,x,y,image,imageforhover)
  arrowleft = new LeftArrow(100, 100, 60, 660, arrowleftImage, arrowLhoverImage);
  arrowright = new RightArrow(100, 100, 1220, 660, arrowrightImage, arrowRhoverImage);

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
  //Bed lamp light parameters (w,h)
  bedlamplight = new BedLampLight(1280, 720);
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
  book = new Book(1280, 720, 640, 360, bookOpenImage);
  //coffee image parameters (w,h,x,y,image)
  coffee = new Coffee(60, 60, 573, 570, coffeeImage);
  //Phone code paper parameters (w,h,x,y,image)
  phoneCodePaper = new PhoneCodePaper(1280, 720, 640, 360, phoneCodePaperImage);
  //bear parameters (w,h,x,y,image)
  bear = new Bear(1280, 720, 640, 360, bearImage);
  //Aquarium Layout parameters (w,h,x,y,image)
  aquariumLayout = new AquariumLayout(1280, 720, 640, 360, aquariumLayoutImage, aquariumHelpImage);
  //Aquarium parameters (w,h,x,y,image,hoverimage)
  aquarium = new Aquarium(180, 130, 773, 460, aquariumImage, aquariumHoverImage);
  //Koi fish parameters (w,h,x,y,image,image2)
  koiFish = new KoiFish(150, 100, 640, 360, koiFishLeftImage, koiFishRightImage);
  //Aquarium ending parameters (w,h,x,y,image,image clicked)
  aquariumEnding = new AquariumEnding(1280, 720, 640, 360, aquariumEndImage, aquariumEndClickImage);

  /*=============================
            ROOM 3
===============================*/

  //cityscape3 parameters (w,h,x,y,image)
  cityscape3 = new Cityscape3(1280, 720, 640, 360, cityscape3Image);
  //room3layout parameters (w,h,x,y,image)
  room3Layout = new Room3Layout(1280, 720, 640, 360, room3LayoutImage);

  //Bagnote parameters (w,h,x,y,image)
  bagNote = new BagNote(1280, 720, 640, 360, bagNoteImage);

  //phone parameters (w,h,x,y,image,imageHover)
  phone = new Phone(60, 40, 859, 530, phoneImage, phoneHoverImage);
  //Phone login menu parameters (w,h,x,y,image)
  phoneLoginMenu = new PhoneLoginMenu(1280, 720, 640, 360, phoneLoginImage);
  //Phone home screen parameters (w,h,x,y,image)
  phoneHome = new PhoneHome(1280, 720, 640, 360, phoneHomeImage);
  //Phone Photos screen parameters (w,h,x,y,image)
  phonePhoto = new PhonePhoto(1280, 720, 640, 360, phonePhotoImage);
  //Phone Notes Screen Parameters (w,h,x,y,image)
  phoneNote = new PhoneNote(1280, 720, 640, 360, phoneNoteImage);

  //CrossyMenu parameters (w,h,x,y,image)
  crossyMenu = new CrossyMenu(1280, 720, 640, 360, crossyMenuImage);
  //CrossyHelp parameters (w,h,x,y,image)
  crossyHelp = new CrossyHelp(1280, 720, 640, 360, crossyHelpImage);
  //Crossy fooled parameteres (w,h,x,y,image)
  crossyFooled = new CrossyFooled(1280, 720, 640, 360, crossyFooledImage);
  //Crossy quiz parameters (w,h,x,y,image)
  crossyQuiz = new CrossyQuiz(1280, 720, 640, 360, crossyQuizImage);
  //Crossy end parameters (w,h,x,y,image)
  crossyEnd = new CrossyEnd(1280, 720, 640, 360, crossyEndImage);
}

function draw() {
  //Organize what states the simulation consists of...
  //The room the user begins on
  //Class that handles the states
  stateShow.display();
}

//If the game is over everything resets put this on the title screen after
function reset(){

}

/*=====P5 Functions====*\
keyTyped,keyPressed,mouseClicked
\*=====================*/

//When a key is typed it will display on the LaptopLogIn screen. This needs to be done in the script.js file for it to work.
function keyTyped() {
  //Class that handles the key typed interaction
  stateKeyTypedInteraction.active();
}

//Extract one character at a time with backspace
function keyPressed() {
  //Call the pretitle keypressed function
  preTitle.keyPressed();
  //Delete a letter at a time for each
  if (keyCode == 8) {
    userCurrentInput = userCurrentInput.substring(0, userCurrentInput.length + keyDel);
    passCurrentInput = passCurrentInput.substring(0, passCurrentInput.length + keyDel);
    atomCurrentInput = atomCurrentInput.substring(0, atomCurrentInput.length + keyDel);
    answerCurrentInput = answerCurrentInput.substring(0, answerCurrentInput.length + keyDel);
  }
}

//Mouse Interaction
function mouseClicked() {
  //Class that handles the mouse clicked interaction
  stateMouseInteraction.active();
}

//Functionality for mousePressed
function mousePressed() {
  //Class that handles the mouse pressed interaction
  stateMousePressedInteraction.active();
}

//Functionality for double clicked.
function doubleClicked() {
  if (state == "LofifyScreen") {
    lofify.doubleClicked();
  }
}
