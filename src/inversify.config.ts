import { Container } from "inversify";
import { Ninja } from "./ninja";
import { Katana } from "./Katana";
import { Shuriken } from "./shuriken";

export const container = new Container();
container.bind<Ninja>(Ninja).to(Ninja);
container.bind<Katana>(Katana).to(Katana);
container.bind<Shuriken>(Shuriken).to(Shuriken);
