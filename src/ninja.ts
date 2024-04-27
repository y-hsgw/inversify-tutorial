import { injectable } from "inversify";
import { Katana } from "./Katana";
import { Shuriken } from "./shuriken";
import { INinja } from "./interfaces";

@injectable()
export class Ninja implements INinja {
  private _katana: Katana;
  private _shuriken: Shuriken;

  constructor(katana: Katana, shuriken: Shuriken) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  fight() {
    return this._katana.hit();
  }

  sneak() {
    return this._shuriken.throw();
  }
}
