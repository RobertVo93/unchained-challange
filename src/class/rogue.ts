import { IAbility } from "@/interface/ability.interface";
import { IRogue } from "@/interface/rogue.interface";
import { ActiveAbility, PassiveAbility } from "./ability";
import { IIndexable } from "@/interface/indexable.interface";

export class Rogue implements IRogue {
    level: number;
    levelPoints: number[];
    availablePoints: number;
    // general abilities
    health: IAbility;
    strength: IAbility;
    pickpocketing: IAbility;
    // rogue abilities
    evade: IAbility;
    vanish: IAbility;
    backstab: IAbility;

    constructor() {
        this.level = 1;
        this.levelPoints = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
        this.availablePoints = 0;
        this.health = new ActiveAbility();
        this.strength = new ActiveAbility();
        this.pickpocketing = new ActiveAbility();
        this.evade = new ActiveAbility();
        this.vanish = new ActiveAbility();
        this.backstab = new PassiveAbility();
    }
    get isMaxLevel() {
        if (!this.levelPoints[this.level + 1]) {
            return true;
        }
        return false;
    }

    levelUp = () => {
        if (this.levelPoints[this.level + 1]) {
            this.availablePoints += this.levelPoints[this.level + 1];
            this.level += 1;
        }
        return this;
    }
    abilityUp = (ability: string) => {
        if (this.availablePoints > 0) {
            const selectedAbility: IAbility = (this as IIndexable)[ability];
            const isUp = selectedAbility.abilityUp();
            if (isUp) {
                this.availablePoints -= 1;
            }
        }
    }
}