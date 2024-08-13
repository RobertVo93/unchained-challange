import { IAbility } from "./ability.interface";
import { IHero } from "./hero.interface";

export interface IWizard extends IHero{
    illusion: IAbility;
    blink: IAbility;
    presence: IAbility;
}