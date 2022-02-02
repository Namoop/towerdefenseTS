// Import stylesheets
import './style.css';

// Write TypeScript code!
const app: HTMLElement = document.getElementById('app');

import { cnv, draw, sprites } from './setup';

app.appendChild(cnv);
const pen = cnv.getContext('2d');

let img = new Image(50, 50);
img.src = "https://i.postimg.cc/0NDcHqG9/New-Piskel-1-png.png"

sprites.push({ src: img });

function run() {}
/**
 * Options that can change how the game runs
 * - Gamespeed: Time between ticks (milliseconds)
 * - Stop: Set to True to kill the loop
 * - Scale: How large the canvas will be
 */
export const runOptions = {
  gamespeed: 0,
  stop: false,
  scale: (window.innerWidth - 20) / 800,
};
function loop(): void {
  pen.clearRect(0, 0, cnv.width, cnv.height);
  cnv.width = 800 * runOptions.scale;
  cnv.height = 400 * runOptions.scale;
  run();
  draw();
  if (!runOptions.stop) {
    if (runOptions.gamespeed > 0) window.requestAnimationFrame(loop);
    else setTimeout(window.requestAnimationFrame, runOptions.gamespeed, loop);
  }
}
loop();
