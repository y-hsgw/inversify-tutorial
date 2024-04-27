import { Container } from "inversify";
import { Katana } from "./Katana";
import { Shuriken } from "./shuriken";
import { TYPES } from "./types";
import { Ninja } from "./ninja";

export const container = new Container();
container.bind<Ninja>(TYPES.Ninja).to(Ninja);
container.bind<Katana>(TYPES.Katana).toConstantValue(new Katana("cut!"));
container.bind<Shuriken>(TYPES.Shuriken).to(Shuriken);
