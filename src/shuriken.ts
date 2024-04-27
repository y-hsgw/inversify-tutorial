import { injectable } from "inversify";

@injectable()
export class Shuriken {
  throw() {
    return "hit!";
  }
}
