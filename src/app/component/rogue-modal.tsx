import { Box, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IRogue } from "@/interface/rogue.interface";
import { createData, ITableData } from "@/interface/table-data.interface";

interface Props {
    rogue: IRogue;
    setRogue: Dispatch<SetStateAction<IRogue>>;
    onClose: () => void;
    isOpen: boolean;
}

export const RogueModal = ({ rogue, setRogue, onClose, isOpen }: Props) => {
    const [tableData, setTableData] = useState<ITableData[]>();
    useEffect(() => {
        if (rogue) {
            setTableData([
                createData("Health", rogue.health.level, () => { rogue.abilityUp("health"); setRogue({ ...rogue }) }),
                createData("Strength", rogue.strength.level, () => { rogue.abilityUp("strength"); setRogue({ ...rogue }) }),
                createData("Pickpocketing", rogue.pickpocketing.level, () => { rogue.abilityUp("pickpocketing"); setRogue({ ...rogue }) }),
                createData("Evade", rogue.evade.level, () => { rogue.abilityUp("evade"); setRogue({ ...rogue }) }),
                createData("Vanish", rogue.vanish.level, () => { rogue.abilityUp("vanish"); setRogue({ ...rogue }) }),
                createData("Backstab", rogue.backstab.level, () => { rogue.abilityUp("backstab"); setRogue({ ...rogue }) }),
            ])
        }
    }, [rogue])
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