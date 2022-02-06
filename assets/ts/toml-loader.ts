import { parse } from '@ltd/j-toml';
export async function toml() {
  let url = 'https://raw.githubusercontent.com/Namoop/towerdefenseTS/master/';
  let res: Response = await fetch(url + 'config.toml');
  let txt: string = await res.text();
  return parse(txt, { bigint: false });
}
