import { injectable } from "inversify";
import { IKatana } from "./interfaces";

@injectable()
export class Katana implements IKatana {
  private readonly sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  hit() {
    return this.sound;
  }
}
