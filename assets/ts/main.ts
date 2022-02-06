const app: HTMLElement = document.getElementById('app');
let resolveframe: Function;
window.sprites = {}
window.nextframe = new Promise((r) => (resolveframe = r));

import { cnv, draw } from './setup';
import { Sprite } from './Sprite.class';

app.appendChild(cnv);
const pen = cnv.getContext('2d');

let test = new Sprite('bob.png', sprites)
  .move(100, 100)
  .setSize(200);

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
function run() {
  test.direction++;
}

setTimeout(toodlyoo, 2000);
function toodlyoo() {
  test.glide(400, 300);
}

function loop(): void {
  frame++;
  fps.push(Date.now());
  while (Date.now() - fps[0] > 1000) fps.shift();
  pen.clearRect(0, 0, cnv.width, cnv.height);
  cnv.width = 800 * runOptions.scale;
  cnv.height = 400 * runOptions.scale;
  run();
  draw();
  resolveframe();
  nextframe = new Promise((r) => (resolveframe = r));
  if (!runOptions.stop) {
    if (runOptions.gamespeed > 0) window.requestAnimationFrame(loop);
    else setTimeout(window.requestAnimationFrame, runOptions.gamespeed, loop);
  }
}
let frame = 0;
let fps: number[] = [];
console.clear();
loop();
