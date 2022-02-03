const app: HTMLElement = document.getElementById('app');

import { cnv, draw, sprites } from './setup';

app.appendChild(cnv);
const pen = cnv.getContext('2d');

//import * as myimg from './john.png';
//Sharp("john.png")
//console.log(myimg);
let img = new Image(70, 50);
document.body.appendChild(img);
img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABkCAYAAABU19jRAAAAAXNSR0IArs4c6QAAAx5JREFUeF7tncthwkAQQ6EKbumAxlJQGqMDblSRHEIOJCb2gkdI45dr1qsZ6Xn8IZ/96W33uePLxoHjebe3KWaikD3AeMUDMF552FcDMPYReRUIMF552FcDMPYReRUIMF552FcDMPYReRUIMF552FcDMPYReRW4OWCOl/ehBE6Hj6H13RcDzEzCAHNr0GaBmQPhZxLNrVNNlNHJ+LuutfoAmDuJA8y0MQATBszopFgbfIABmKGrKsAADMD858DSEb103ZDbTyx+tJ5Hj7tXKhOGCTOEMcAADMAsuSQtdWn0qWTpvqPrHr20PHocl6SrA6MvwABm4296R89sl/WjoPOm1yW5F9UBMMuM59dMlvkkW7W5pySZs02FAKZpsFVtAUyVs033BZimwVa1BTBVzjbdF2CaBlvVFsBUOdt0X4BpGmxVWwBT5WzTfQGmONjjuViA7W8ciP9oAGC0RAOM1u94NYCJj1DbAMBo/Y5XA5j4CLUNAIzW73g1gImPUNsAwGj9jlcDmPgItQ0AjNbveDWAiY9Q2wDAaP2OVwOY+Ai1DQCM1u94NYCJj1DbAMBo/Y5XA5j4CLUNAIzW73g1gImPUNsAwGj9jlcDmPgItQ0AjNbveDWAiY9Q2wDAaP2OVwOY+Ai1DQCM1u94NYCJj1DbAMBo/Y5XA5j4CLUNAIzW73g1gImPUNsAwGj9jlcDmPgItQ3EA6O1q16NP1lW73ErBYBpFWd9MwBT73ErBYBpFWd9MwBT73ErBYBpFWd9MwBT73ErBYBpFWd9MwBT73ErBYBpFWd9MwBT73ErBYCZifPZfzA+R8vp8DG3xOr7AAMwQ0ACzNWue5OkegL81q3WG6JjYjHAAMwQQ5sFxvXM/qnLddIAzPX8cgkIYIYG3p/Fq//EnX0gl/dJx2yAPu/2z0VaezTAuE3ArsC86qmn6vxxuedqew8DMDXotgWmxi6fXV91QgCMDwNDlQDMtF2r3/QOpRK0eO4zr7WespgwQVD8VyrAfLvDhDEDmgljFoh7OQDjnpBZfQBjFoh7OQDjnpBZfQBjFoh7Oe7AfAHJy+ZSxh/KNAAAAABJRU5ErkJgggAA"
//'./john.png';


//sprites.push({ src: img });

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
