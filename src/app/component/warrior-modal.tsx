import { Box, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IWarrior } from "@/interface/warrior.interface";
import { createData, ITableData } from "@/interface/table-data.interface";

interface Props {
    warrior: IWarrior;
    setWarrior: Dispatch<SetStateAction<IWarrior>>;
    onClose: () => void;
    isOpen: boolean;
}

export const WarriorModal = ({ warrior, setWarrior, onClose, isOpen }: Props) => {
    const [tableData, setTableData] = useState<ITableData[]>();
    useEffect(() => {
        if (warrior) {
            setTableData([
                createData("Health", warrior.health.level, () => { warrior.abilityUp("health"); setWarrior({ ...warrior }) }),
                createData("Strength", warrior.strength.level, () => { warrior.abilityUp("strength"); setWarrior({ ...warrior }) }),
                createData("Pickpocketing", warrior.pickpocketing.level, () => { warrior.abilityUp("pickpocketing"); setWarrior({ ...warrior }) }),
                createData("Berserker Rage", warrior.berserkerRage.level, () => { warrior.abilityUp("berserkerRage"); setWarrior({ ...warrior }) }),
                createData("Taunt", warrior.taunt.level, () => { warrior.abilityUp("taunt"); setWarrior({ ...warrior }) }),
                createData("Damage Reduction", warrior.damageReduction.level, () => { warrior.abilityUp("damageReduction"); setWarrior({ ...warrior }) }),
            ])
        }
    }, [warrior])
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: 600,
                width: "100%",
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }} aria-label="ability table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={1}>Ability</TableCell>
                                <TableCell colSpan={1}>Level</TableCell>
                                <TableCell colSpan={10} align='right'>Upgrade</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData?.map((row) => (
                                <TableRow
                                    key={row.ability}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell colSpan={1}>{row.ability}</TableCell>
                                    <TableCell colSpan={1}>{row.level}</TableCell>
                                    <TableCell colSpan={10} align='right'><IconButton onClick={() => row.upgrade()}><UpgradeIcon /></IconButton></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Modal>
    )
}