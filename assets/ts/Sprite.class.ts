export class Sprite {
  src = new Image();
  x = 0;
  y = 0;
  direction = 0;
  width = 100;
  height = 100;
  alpha = 100;
  id = Date.now();
  draggable = false;
  constructor(src: string, sprites: any) {
    this.src.src = url + src;
    sprites[this.id] = this;
  }
  /** Move the position of the sprite
   * @param {number} x Target position
   * @param {number} y
   */
  move(x: number, y: number): Sprite {
    this.x = x;
    this.y = y;
    return this;
  }
  /** Change the size (percentage) of the sprite
   * @param {number} width
   * @param {number} height | Optional - If left blank will set to same as height
   */
  setSize(width: number, height?: number): Sprite {
    if (typeof height == 'undefined') this.height = this.width = width;
    else [this.width, this.height] = [width, height];
    return this;
  }

  /** Asynchronously glide to a location
   * @param {number} x Target position
   * @param {number} y
   */
  async glide(x: number, y: number) {
    while (Math.hypot(x - this.x, y - this.y) > 1) {
      this.x += (x - this.x) / 100;
      this.y += (y - this.y) / 100;
      await nextframe;
    }
    [this.x, this.y] = [x, y];
  }

  touching() {} //colliding with
  touchingAll() {} //colliding with type | sprite.touchingAll(Dot) -> [dot1, dot2]
  onclick() {} //
  onhover() {} //

  pointTowards(obj: Sprite) {} //set direction towards param
}

export class Button extends Sprite {
  constructor(src, sprites) {
    super(src, sprites)
  }
}


let url =
  'https://raw.githubusercontent.com/Namoop/towerdefenseTS/master/assets/images/';
