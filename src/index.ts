import "reflect-metadata";
import { container } from "./inversify.config";
import { Ninja } from "./ninja";
import { TYPES } from "./types";

const ninja = container.get<Ninja>(TYPES.Ninja);

console.log(ninja.fight()); // cut!
ninja.sneak();
console.log(ninja.sneak()); // hit!
