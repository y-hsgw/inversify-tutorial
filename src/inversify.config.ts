import { Container } from "inversify";
import { Ninja } from "./ninja";
import { Katana } from "./Katana";
import { Shuriken } from "./shuriken";

export const container = new Container();
container.bind<Ninja>(Ninja).toSelf();
container.bind<Katana>(Katana).toConstantValue(new Katana("cut!"));
container.bind<Shuriken>(Shuriken).toSelf();
