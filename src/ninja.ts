import { injectable } from "inversify";
import { Katana } from "./Katana";
import { Shuriken } from "./shuriken";

@injectable()
export class Ninja {
  private _katana: Katana;
  private _shuriken: Shuriken;

  public constructor(katana: Katana, shuriken: Shuriken) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight() {
    return this._katana.hit();
  }
  public sneak() {
    return this._shuriken.throw();
  }
}
