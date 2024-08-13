import { IAbility } from "@/interface/ability.interface";

export class ActiveAbility implements IAbility {
    level: number;
    maxLevel: number;
    type: "active" | "passive";

    constructor() {
        this.level = 0;
        this.maxLevel = 3;
        this.type = "active";
    }

    abilityUp = () => {
        if (this.level + 1 <= this.maxLevel) {
            this.level += 1;
            return true;
        }
        return false;
    }
}

export class PassiveAbility implements IAbility {
    level: number;
    maxLevel: number;
    type: "active" | "passive";

    constructor() {
        this.level = 1;
        this.maxLevel = 1;
        this.type = "passive";
    }

    abilityUp = () => {
        if (this.level + 1 <= this.maxLevel) {
            this.level += 1;
            return true;
        }
        return false;
    }
}