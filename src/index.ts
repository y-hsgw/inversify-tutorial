import "reflect-metadata";
import { container } from "./inversify.config";
import { Ninja } from "./ninja";

const samurai = container.resolve(Ninja);

console.log(samurai.fight()); // cut!
samurai.sneak();
console.log(samurai.sneak()); // hit!
