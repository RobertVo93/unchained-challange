import { IAbility } from "./ability.interface";
import { IHero } from "./hero.interface";

export interface IWarrior extends IHero {
    berserkerRage: IAbility;
    taunt: IAbility;
    damageReduction: IAbility;
}