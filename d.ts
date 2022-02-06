declare let nextframe: any;
interface Sprite {
  x: number;
  y: number;
  alpha: number;
  direction: number;
  width: number;
  height: number;
  src: HTMLImageElement;
  //move: (x: number, y: number) => void;
}
type SpriteObj = { [key: string]: Sprite };
declare let sprites: SpriteObj;
