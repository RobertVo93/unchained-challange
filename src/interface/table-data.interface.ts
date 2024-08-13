export interface ITableData {
    ability: string;
    level: number;
    upgrade: Function;
}

export const createData = (
    ability: string,
    level: number,
    upgrade: Function,
): ITableData => {
    return { ability, level, upgrade };
}