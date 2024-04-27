import { injectable } from "inversify";

@injectable()
export class Katana {
  private readonly sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  hit() {
    return this.sound;
  }
}
