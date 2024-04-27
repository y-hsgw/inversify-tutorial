import { inject, injectable } from "inversify";
import { IKatana, INinja, IShuriken } from "./interfaces";
import { TYPES } from "./types";

@injectable()
export class Ninja implements INinja {
  private _katana: IKatana;
  private _shuriken: IShuriken;

  constructor(
    @inject(TYPES.Katana) katana: IKatana,
    @inject(TYPES.Shuriken) shuriken: IShuriken
  ) {
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
