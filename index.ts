const app: HTMLElement = document.getElementById('app');

import { cnv, draw, sprites } from './setup';
import { Sprite } from './Sprite.class';

app.appendChild(cnv);
const pen = cnv.getContext('2d');

let test = new Sprite('bob.png', sprites).move(140, 100).setSize(100);

function run() {
  test.direction++;
}
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
  [frame, nextframe] = runAsync([
    frame + 1,
    new Promise(function (resolve) {
      runAsync = resolve;
    }),
  ]);
  if (!runOptions.stop) {
    if (runOptions.gamespeed > 0) window.requestAnimationFrame(loop);
    else setTimeout(window.requestAnimationFrame, runOptions.gamespeed, loop);
  }
}
let frame = 0;
let runAsync: Function;
let nextframe = new Promise(function (resolve) {
  runAsync = resolve;
});
loop();

setTimeout(toodlyoo, 500);

async function toodlyoo() {
  //let myframe;
  //[myframe, nextFrame] =
  await nextframe;
  console.log(frame);

  while (frame < 55) {
    //[myframe, nextFrame] =
    await nextFrame;
    //if (myframe < 50) console.log(myframe);
    console.log(frame);
  }
}
