export class Sprite {
  src = new Image();
  x = 0;
  y = 0;
  direction = 0;
  width = 100;
  height = 100;
  id = Date.now();
  draggable = false;
  constructor(src: string, sprites: any) {
    this.src.src = url + src;
    sprites[this.id] = this;
  }
  /** Move the position of the sprite
   * @prop {number} x
   * @prop {number} y
   */
  move(x: number, y: number): Sprite {
    this.x = x;
    this.y = y;
    return this;
  }
  /** Change the size (percentage) of the sprite
   * @prop {number} width
   * @prop {number} height | Optional - If left blank will set to same as height
   */
  setSize(width: number, height?: number): Sprite {
    if (typeof height == 'undefined') this.height = this.width = width;
    else [this.width, this.height] = [width, height];
    return this;
  }

  //tickFunctions? (){}
}

let url =
  'https://raw.githubusercontent.com/Namoop/towerdefenseTS/master/assets/images/';
