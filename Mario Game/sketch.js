var bg, bgImage;
var mario, marioImage;
var marioCollided;
var ground;
var brickImage, bricksGroup;
var coinImage, coinGroup;
var coinScore = 0;
var coinSound;
var jumpSound;
var deadSound;
var gameSound;
var obstacleImg1, obstacleImg2, obstacleGroup;

var gameState = "PLAY";
var restartImg;

//load assests
function preload() {
  bgImage = loadImage("./images/bg.jpg");
  marioImage = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png"
  );
  coinImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png",
    "images/con6.png"
  );
  obstacleImg1 = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  obstacleImg2 = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );
  brickImage = loadImage("images/brick.png");
  marioCollided = loadAnimation("images/dead.png");
  restartImg = loadImage("images/restart.png");

  // sounds
  coinSound = loadSound("./sounds/coinSound.mp3");
  jumpSound = loadSound("./sounds/jump.mp3");
  gameSound = loadSound("./sounds/super-mario-bros-4293.mp3");
  deadSound = loadSound("./sounds/dieSound.mp3");
}

//create basic skeletonn with their required credentials
function setup() {
  //create canvas
  gameSound.play();
  gameSound.loop();
  createCanvas(1000, 650);
  bg = createSprite(600, 300, 150, 50);
  bg.addImage(bgImage);
  bg.scale = 0.5;

  mario = createSprite(200, 520, 50, 50);
  mario.addAnimation("running", marioImage);
  mario.scale = 0.2;
  //create ground
  ground = createSprite(200, 580, 400, 10);
  //   create bricks
  bricksGroup = new Group();
  coinGroup = new Group();
  obstacleGroup = new Group();

  mario.addAnimation("collided", marioCollided);
  restart = createSprite(500, 300);
  restart.addImage(restartImg);
  restart.visible = false;
}
//used to redraw the objects on the screen
function draw() {
  //Make background move and repeat
  drawSprites();

  if (gameState == "PLAY") {
    // MAKE background
    bg.velocityX = -8;
    if (bg.x < 100) bg.x = bg.width / 4;

    // mario flies
    if (keyDown("space")) {
      jumpSound.play();
      mario.velocityY = -10;
    }

    //add gravity
    mario.velocityY = mario.velocityY + 0.5;

    //mario stuck on ground
    mario.collide(ground);
    ground.visible = false;

    //   display text
    textSize(26);
    
    fill("brown");
    textFont('Silkscreen')
    text("Coin Collection : " + coinScore, 400, 50);

    //   call generate bricks
    generateBricks();
    generateCoins();
    generateobstacle();

    for (let i = 0; i < bricksGroup.length; i++) {
      var element = bricksGroup.get(i);
      if (mario.isTouching(element)) {
        mario.collide(element);
      }
    }

    if (mario.x < 200) {
      mario.x = 200;
    }
    if (mario.y < 50) {
      mario.y = 50;
    }

    for (let i = 0; i < coinGroup.length; i++) {
      var element = coinGroup.get(i);
      if (mario.isTouching(element)) {
        coinSound.play();
        element.destroy();
        element = null;
        coinScore = coinScore + 100;
        console.log("Score : " + coinScore);
      }
    }
    for (let i = 0; i < obstacleGroup.length; i++) {
      var element = obstacleGroup.get(i);
      if (mario.isTouching(element)) {
        deadSound.play();
        gameSound.stop()
        gameState = "END";
      }
    }
  }
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;

    obstacleGroup.setVelocityXEach(0);
    coinGroup.setVelocityXEach(0);
    bricksGroup.setVelocityXEach(0);

    bricksGroup.setLifetimeEach(-1);
    coinGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);

    mario.changeAnimation("collided", marioCollided);
    mario.y = 570;
    mario.scale = 0.4;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }

}

function generateBricks() {
  if (frameCount % 70 == 0) {
    // console.log(frameCount);
    var brick = createSprite(1200, 100, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.velocityX = -5;
    brick.scale = 0.5;

    brick.lifetime = 250;
    bricksGroup.add(brick);
  }
}
function generateCoins() {
  if (frameCount % 50 == 0) {
    // console.log(frameCount);
    var coin = createSprite(1200, 100, 40, 10);
    coin.y = random(150, 400);
    coin.addAnimation("rotate", coinImage);
    coin.scale = 0.1;
    coin.velocityX = -5;
    coin.lifetime = 250;
    coinGroup.add(coin);
  }
}
function generateobstacle() {
  var fCountdelay = Math.round(random(60, 182));
  if (frameCount % fCountdelay == 0) {
    // console.log(frameCount);
    var obstacle = createSprite(1200, 100, 40, 10);
    obstacle.y = 545;
    // obstacle.x = random(50,80);
    var ranIma = Math.floor(random(0, 2));
    console.log("random value for onstacle :" + ranIma);
    switch (ranIma) {
      case 1:
        obstacle.addAnimation("obstacleWalk", obstacleImg1);

        break;
      case 0:
        obstacle.addAnimation("obstacleWalk2", obstacleImg2);
        break;

      default:
        break;
    }
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 250;
    obstacleGroup.add(obstacle);
  }
}

function restartGame() {
    gameState = "PLAY";

    obstacleGroup.destroyEach();
    bricksGroup.destroyEach();
    coinGroup.destroyEach();
  
    mario.changeAnimation("running", marioImage);
    mario.scale = 0.2;
  
    coinScore = 0;
    
    restart.visible = false;
    
}
