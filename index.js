//const { request } = require("http");

const keys = {};
document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

function gameLoop() {
   if (keys['ArrowRight']) player.x += 5;
   if (keys['ArrowUp']) player.y -= 5;
   requestAnimationFrame(gameLoop);
}
gameLoop();

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const image = new Image();

drawImage();

function drawImage() {
   image.src = 'pictures/zombie1.png';
   image.onload = function() {
      ctx.drawImage(image,0,0,100,100);
   } 
}

