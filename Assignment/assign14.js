// selector
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const image = document.getElementById("source");
const obsticle1Img = document.getElementById("missle");
const obsticle2Img = document.getElementById("turtle");
const treasureImg = document.getElementById("treasurBox");

const player = {
  w: 50,
  h: 70,
  x: 500,
  y: 600,
  speed: 5,
  dx: 0,
  dy: 0
};
const obsticle1 = {
  w: 200,
  h: 150,
  x: 850,
  y: 100,
  dx: 6,
  dy: 0
};
const obsticle2 = {
  w: 250,
  h: 150,
  x: 800,
  y: 300,
  dx: 3,
  dy: 0
};
const treasure = {
  w: 100,
  h: 100,
  x: 10,
  y: 50,

};
var hit=0;
// console.log(hit);

function treasureBox() {
    ctx.drawImage(treasureImg,  treasure.x, treasure.y, treasure.w, treasure.h);
}
var pos=0;
console.log("position of treasure :"+ treasure.x);
function obsticleMove() {
    
    ctx.drawImage(obsticle1Img, obsticle1.x, obsticle1.y, obsticle1.w, obsticle1.h);
    ctx.drawImage(obsticle2Img, obsticle2.x, obsticle2.y, obsticle2.w, obsticle2.h);
    obsticle1.x -= obsticle1.dx;
    obsticle2.x -= obsticle2.dx;
    if(obsticle1.x+obsticle1.w<0){
        obsticle1.x = 900;
    }
    if(obsticle2.x+obsticle2.w<0){
        obsticle2.x = 900;
    }
}


function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}
// Create Animation
function update() {
  clear();

  if(pos==0){
    treasureBox();
  }

  obsticleMove();

  drawPlayer();

  newPos();


  requestAnimationFrame(update);

  if(player.x==treasure.x && player.y==treasure.y ){
    hit++;
    pos=1;
    console.log("no of hit"+hit);
    treasureImg.style.display ="none";
  }
}


function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  console.log(e.key);
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key == "Up" ||
    e.key == "ArrowUp" ||
    e.key == "Down" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
