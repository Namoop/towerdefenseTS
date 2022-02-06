import * as TOML from '@ltd/j-toml';
export async function config() {
  let url = 'https://raw.githubusercontent.com/Namoop/towerdefenseTS/master/';
  let res: Response = await fetch(url + 'config.toml');
  let txt: string = await res.text();
  return TOML.parse(txt);
}
