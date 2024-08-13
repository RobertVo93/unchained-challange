import { IAbility } from "./ability.interface";
import { IHero } from "./hero.interface";

export interface IRogue extends IHero{
    evade: IAbility;
    vanish: IAbility;
    backstab: IAbility;
}