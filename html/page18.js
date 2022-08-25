// // selector

var canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
// // canvas.width =window.innerWidth;
// ctx.fillStyle = 'green';
// ctx.fillRect(50, 100, 150, 100);

// // Syntax - fillRect(x, y, width, height)
// // ctx.fillRect

// // strokeRect(x, y, width, height)

// ctx.strokeStyle = 'red';
// ctx.lineWidth = 5;
// ctx.strokeRect(250, 100, 150, 100);
// // ctx.strokeStyle = "red";

// ctx.fillStyle = "orange";
// ctx.roundRect(250,300,100,100,[10]);
// ctx.fill();
// // canvas clear
// ctx.clearRect(0,0,canvas.width,canvas.height);


// ctx.font = "30px Arial";
// ctx.fillText("Hello Shruti!!!",150,150);

// ctx.lineWidth = 1;
// ctx.strokeStyle="purple";
// ctx.strokeText("HELLO",150,250);

// ctx.clearRect(0,0,canvas.width,canvas.height);

// // Draw traingle

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200);
// // ctx.lineTo(50,50);
// ctx.closePath();

// // ctx.lineTo(50,50);
// ctx.closePath();
// ctx.fillStyle="coral";
// ctx.fill();
// // ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200);
// ctx.closePath();
// ctx.stroke();

// // circle

// ctx.beginPath();
// ctx.arc(300,300,50,0,Math.PI*2);
// ctx.stroke();


// ball 

var circle={
    x:200,
    y:200,
    size :30,
    dx:5,
    dy:5,

};

// draw circle
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
    ctx.fillStyle ="purple";
    ctx.fill();
}

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;
    requestAnimationFrame(update);
    console.log(123);
    if(circle.x+circle.size>canvas.width || circle.x-circle.size<0){
        circle.dx *= -1
    }
    if(circle.y+circle.size>canvas.height || circle.y-circle.size<0){
        circle.dy *= -1
    }
}

update();