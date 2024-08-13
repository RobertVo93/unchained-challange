import { IAbility } from "./ability.interface";

export interface IHero {
    isMaxLevel: boolean;
    level: number;
    availablePoints: number;
    health: IAbility;
    strength: IAbility;
    pickpocketing: IAbility;

    levelUp: Function;
    abilityUp: Function;
}