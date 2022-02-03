export class Sprite {
  src = new Image();
  x = 0;
  y = 0;
  direction: 0;
  size = 100;
  width = 100;
  height = 100;
  id = Date.now();
  constructor(src: string, sprites: any) {
    this.src.src = url + src;
    sprites[this.id] = this;
  }
  move(x: number, y: number): Sprite {
    this.x = x;
    this.y = y;
    return this;
  }
}

let url =
  'https://raw.githubusercontent.com/Namoop/towerdefenseTS/master/assets/images/';
