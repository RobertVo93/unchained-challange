"use client";

import { Rogue } from '@/class/rogue';
import { IRogue } from '@/interface/rogue.interface';
import {
  Box,
  Button,
  Grid,
  Paper,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { RogueModal } from './component/rogue-modal';
import { IWizard } from '@/interface/wizard.interface';
import { Wizard } from '@/class/wizard';
import { MageModal } from './component/mage-modal';
import { IWarrior } from '@/interface/warrior.interface';
import { Warrior } from '@/class/warrior';
import { WarriorModal } from './component/warrior-modal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: "100%",
  '&:hover': {
    border: "1px solid white",
  },
  cursor: "pointer",
}));

type HeroType = "wizard" | "warrior" | "rogue";

export default function Home() {
  const [mage, setMage] = useState<IWizard>(new Wizard());
  const [warrior, setWarrior] = useState<IWarrior>(new Warrior());
  const [rogue, setRogue] = useState<IRogue>(new Rogue());
  const [selectedHero, setSelectedHero] = useState<HeroType>()

  const onLevelUpHandler = () => {
    const newMage = mage.levelUp();
    const newWarrior = warrior.levelUp();
    const newRogue = rogue.levelUp();

    setMage({ ...newMage })
    setWarrior({ ...newWarrior })
    setRogue({ ...newRogue })
  }

  return (
    <Box sx={{ flexGrow: 1, padding: "15px" }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingBottom: "10px",
      }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px"
        }}>
          <Button variant='contained' disabled={!!mage.isMaxLevel} onClick={onLevelUpHandler}>Level up</Button>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
          }}>Level: {mage.level}</span>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Item onClick={() => setSelectedHero("wizard")}>
            <Button>
              <img alt="Mage" width={`100%`} height={`auto`} src={"/mage_class.jpg"} />
            </Button>
            <Box sx={{ color: "white" }}>Mage</Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item onClick={() => setSelectedHero("warrior")}>
            <Button>
              <img alt="Warrior" width={`100%`} height={`auto`} src={"/warrior_class.jpg"} />
            </Button>
            <Box sx={{ color: "white" }}>Warrior</Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item onClick={() => setSelectedHero("rogue")}>
            <Button>
              <img alt="Rogue" width={`100%`} height={`auto`} src={"/rogue_class.jpg"} />
            </Button>
            <Box sx={{ color: "white" }}>Rogue</Box>
          </Item>
        </Grid>
      </Grid>
      <MageModal mage={mage} setMage={setMage} isOpen={selectedHero === "wizard"} onClose={() => setSelectedHero(undefined)} />
      <WarriorModal warrior={warrior} setWarrior={setWarrior} isOpen={selectedHero === "warrior"} onClose={() => setSelectedHero(undefined)} />
      <RogueModal rogue={rogue} setRogue={setRogue} isOpen={selectedHero === "rogue"} onClose={() => setSelectedHero(undefined)} />
    </Box>
  );
}
