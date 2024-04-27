import { inject, injectable } from "inversify";
import { IKatana, INinja, IShuriken } from "./interfaces";
import { TYPES } from "./types";

@injectable()
export class Ninja implements INinja {
  @inject(TYPES.Katana) private _katana!: IKatana;
  @inject(TYPES.Shuriken) private _shuriken!: IShuriken;

  fight() {
    return this._katana.hit();
  }

  sneak() {
    return this._shuriken.throw();
  }
}
