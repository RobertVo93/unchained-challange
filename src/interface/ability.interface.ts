export interface IAbility {
    level: number;
    maxLevel: number;
    type: "active" | "passive";
    abilityUp: Function;
}