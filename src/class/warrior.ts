import { IAbility } from "@/interface/ability.interface";
import { IWarrior } from "@/interface/warrior.interface";
import { ActiveAbility, PassiveAbility } from "./ability";
import { IIndexable } from "@/interface/indexable.interface";
export class Warrior implements IWarrior {
    level: number;
    levelPoints: number[];
    availablePoints: number;
    // general abilities
    health: IAbility;
    strength: IAbility;
    pickpocketing: IAbility;
    // warrior abilities
    berserkerRage: IAbility;
    taunt: IAbility;
    damageReduction: IAbility;

    constructor() {
        this.level = 1;
        this.levelPoints = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
        this.availablePoints = 0;
        this.health = new ActiveAbility();
        this.strength = new ActiveAbility();
        this.pickpocketing = new ActiveAbility();
        this.berserkerRage = new ActiveAbility();
        this.taunt = new ActiveAbility();
        this.damageReduction = new PassiveAbility();
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