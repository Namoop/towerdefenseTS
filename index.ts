const app: HTMLElement = document.getElementById('app');

import { cnv, draw, sprites } from './setup';
import { Sprite } from './Sprite.class';

app.appendChild(cnv);
const pen = cnv.getContext('2d');

let test = new Sprite('bob.png', sprites).move(140, 100).setSize(100);

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

let resolveframe: Function;
let nextframe = new Promise((r) => (resolveframe = r));

setTimeout(toodlyoo, 500);
async function toodlyoo() {
  while (frame < 500) {
    await nextframe;
    if (frame % 100 == 0) console.log(frame);
  }
}

function loop(): void {
  frame++;
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
console.clear();
loop();
