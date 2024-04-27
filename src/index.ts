import "reflect-metadata";
import { container } from "./inversify.config";
import { Ninja } from "./ninja";

const samurai = container.get(Ninja);

console.log(samurai.fight()); // cut!
samurai.sneak();
console.log(samurai.sneak()); // hit!
