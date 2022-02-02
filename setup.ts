export const cnv = document.createElement('canvas');
cnv.oncontextmenu = function () {
  return false;
};
//const scale: number = (window.innerWidth - 20) / 800;
cnv.style.border = '3px solid #000000';
const pen = cnv.getContext('2d');

export const sprites = []
export function draw ():void {
  for (let i of sprites) pen.drawImage(i.src, 0, 0)
}

Object.defineProperty(window, 'here', {
  get: function () {
    console.log('here');
  },
  set: function (x) {
    console.log(x);
  },
});

const kp: any = {};
cnv.onkeydown = onkeyup = function (e) {
  if (e.key.length == 1)
    kp[
      e.key.toLowerCase() == e.key ? e.key.toUpperCase() : e.key.toLowerCase()
    ] = 0;
  kp[e.key] = e.type == 'keydown' ? kp[e.key] || Date.now() : 0;
  //const event = `key ${e.key} ${e.type.slice(3)}`;
  //me.onEvent?.[event]?.(event, Date.now() - kp[e.key]);
  //if (me.logEvents) console.log(event);
};

let windowMouseX: number, windowMouseY: number;
cnv.onmousemove = (e) =>
  ([windowMouseX, windowMouseY] = [e.clientX, e.clientY]);
cnv.ontouchmove = (e) =>
  ([windowMouseX, windowMouseY] = [e.touches[0].clientX, e.touches[0].clientY]); //tap and place?

/**Returns current mouse state [left, middle, right]
 *
 */
const mouseDown = [false, false, false];
cnv.onmouseup = function (e) {
  mouseDown[e.button] = false;
};
cnv.ontouchend = function (e) {
  mouseDown[0] = false;
};
cnv.onmousedown = function (e) {
  mouseDown[e.button] = true;
  //for (let i of me.onclicks) if (e.button == i[1]) i[0](e);
};
cnv.ontouchstart = function (e) {
  [windowMouseX, windowMouseY] = [e.touches[0].clientX, e.touches[0].clientY];
  mouseDown[0] = true;
  //for (let i of me.onclicks) if (e.button == i[1]) i[0](e);
};
//}
