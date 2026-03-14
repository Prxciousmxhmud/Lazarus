const { request } = require("http");

const keys = {};
document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

function gameLoop() {
   if (keys['ArrowRight']) player.x += 5;
   if (keys['ArrowUp']) player.y -= 5;
   requestAnimationFrame(gameLoop);
}
gameLoop();