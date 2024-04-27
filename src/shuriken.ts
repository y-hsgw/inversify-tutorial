import { injectable } from "inversify";
import { IShuriken } from "./interfaces";

@injectable()
export class Shuriken implements IShuriken {
  throw() {
    return "hit!";
  }
}
