'use client';

import { useEffect, useState } from 'react';
import StatusBars from './StatusBars';
import TopStatusPanel from './TopStatusPanel';
import UtilityPanel from '../shared/UtilityPanel';
import InventoryPanel from '../shared/InventoryPanel';
import CharacterPanel from '../shared/CharacterPanel';
import CheatModal from '../shared/CheatModal';

export default function HUD() {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isCharacterOpen, setIsCharacterOpen] = useState(false);
  const [isCheatOpen, setIsCheatOpen] = useState(false);

  const [stats, setStats] = useState({
    health: 100,
    stamina: 100,
    hygiene: 100,
    weight: 0,
    maxWeight: 10,
    cash: 0,
    scrap: 0,
    dayCount: 1,
    timeSegment: 1,
  });

  const refreshStats = () => {
    const health = parseInt(localStorage.getItem('playerHealth')) || 100;
    const stamina = parseInt(localStorage.getItem('playerStamina')) || 100;
    const hygiene = parseInt(localStorage.getItem('playerHygiene')) || 100;
    const weight = parseFloat(localStorage.getItem('playerCurrentWeight')) || 0;
    const maxWeight = parseFloat(localStorage.getItem('playerMaxWeight')) || 10;
    const cash = parseFloat(localStorage.getItem('playerMoney')) || 0;
    const scrap = parseInt(localStorage.getItem('playerJunk')) || 0;
    const dayCount = parseInt(localStorage.getItem('playerDay')) || 1;
    const timeSegment = parseInt(localStorage.getItem('playerTimeSegment')) || 1;

    setStats({ health, stamina, hygiene, weight, maxWeight, cash, scrap, dayCount, timeSegment });
  };

  useEffect(() => {
    refreshStats(); // Initial load

    const handler = () => refreshStats();
    window.addEventListener('playerStatsChanged', handler);
    return () => window.removeEventListener('playerStatsChanged', handler);
  }, []);

  return (
    <>
      <StatusBars
        health={stats.health}
        stamina={stats.stamina}
        hygiene={stats.hygiene}
        weight={stats.weight}
        maxWeight={stats.maxWeight}
      />
      <TopStatusPanel
        cash={stats.cash}
        scrap={stats.scrap}
        dayCount={stats.dayCount}
        timeSegment={stats.timeSegment}
      />
      <UtilityPanel
        onInventory={() => setIsInventoryOpen(!isInventoryOpen)}
        onCharacter={() => setIsCharacterOpen(!isCharacterOpen)}
        onHelp={() => alert('No one can help you... but maybe this tip will!')}
        onCheat={() => setIsCheatOpen(true)}
      />
      {isInventoryOpen && <InventoryPanel onClose={() => setIsInventoryOpen(false)} />}
      {isCharacterOpen && <CharacterPanel onClose={() => setIsCharacterOpen(false)} />}
      {isCheatOpen && <CheatModal onClose={() => setIsCheatOpen(false)} />}
    </>
  );
}
