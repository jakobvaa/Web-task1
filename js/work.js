$(document).ready(function() {
    // all custom jQuery will go here
    $("#clicky").click(function(){
      $("#documentation").slideToggle("slow","swing");
    });

});

let canvas = document.getElementById('canvas');

canvas.addEventListener("mouseout",clearCanvas);
canvas.addEventListener("mousedown",mixItUp);


let ctx = canvas.getContext('2d');

let color = "purple";
let color2 = "yellow";
let color3 = "#2980b9";

function draw() {
  if (canvas.getContext) {
    ctx.beginPath();
    ctx.arc(250,250,125,0, 2*Math.PI,false); //https://www.html5canvastutorials.com/tutorials/html5-canvas-circles/
    ctx.fillStyle = color3;
    ctx.fill();
    ctx.strokeStyle = color2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,500);
    ctx.lineTo(500,0);
    ctx.strokeStyle = color3;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = color2;
    ctx.fillRect(440, 440, 50, 50);

  }
}
function mixItUp(){
  if(color === "purple"){
    color = "yellow";
    color2 = "purple";
    color3 = "yellow";
  }
  else{
    color = "purple";
    color2 = "yellow";
    color3 = "#2980b9";
  }
}
function clearCanvas(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function repeatOften() {
  // Do whatever
  let ran = Math.random();
  let ran3 = Math.random()*500;
  let ran2 = ran*500;

  ctx.beginPath();
  ctx.arc(0+ran3, 0+ran2,ran*20, 2*Math.PI,false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = color2;
  ctx.stroke();
  draw(); //Lag to layers med canvas isteden. Dette bruker unødvendig med ressurser.
  requestAnimationFrame(repeatOften);
}
repeatOften();
