const app: HTMLElement = document.getElementById('app');

import { cnv, draw, sprites } from './setup';
import { Sprite } from "./Sprite.class"

app.appendChild(cnv);
const pen = cnv.getContext('2d');

let test = new Sprite("steve.png", sprites)
  .move(140, 100)

function run() {test.direction++}
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
