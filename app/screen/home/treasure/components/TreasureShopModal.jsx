'use client';

import { useState, useEffect } from 'react';
import allItems from '../../../../../data/items';
import {
  getPlayerInventory,
  addItemToInventory,
  removeItemFromInventory
} from '../../../../../data/playerInventory';
import { FaTimes } from 'react-icons/fa';
import ShopInventory from './ShopInventory';
import PlayerInventory from './PlayerInventory';
import NPCHeader from '../../components/NPCHeader';

export default function TreasureShopModal({ onClose }) {
  const [playerInventory, setPlayerInventory] = useState([]);
  const [playerMoney, setPlayerMoney] = useState(0);

  useEffect(() => {
    refreshInventory();
    refreshMoney();
  }, []);

  const refreshInventory = () => {
    setPlayerInventory(getPlayerInventory());
  };

  const refreshMoney = () => {
    const money = parseFloat(localStorage.getItem('playerMoney') || '0');
    setPlayerMoney(money);
  };

  const handleBuy = (item) => {
    const currentMoney = parseFloat(localStorage.getItem('playerMoney') || '0');
    if (currentMoney < item.value) {
      alert('Not enough money!');
      return;
    }

    addItemToInventory(item.id, 1);
    localStorage.setItem('playerMoney', (currentMoney - item.value).toFixed(2));

    refreshInventory();
    refreshMoney();
  };

  const handleSell = (item) => {
    const currentMoney = parseFloat(localStorage.getItem('playerMoney') || '0');
    const sellPrice = Math.max(item.value * 0.5, 0.01);

    removeItemFromInventory(item.id, 1);
    localStorage.setItem('playerMoney', (currentMoney + sellPrice).toFixed(2));

    refreshInventory();
    refreshMoney();
  };

  const categorizedShop = {
    equipment: allItems.equipment.slice(0, 1),
    consumables: allItems.consumables.slice(0, 2),
    junk: allItems.junk.slice(0, 4),
  };

  const npcIntroText = `Well hey there, stranger. The name's Maggie — but folks 'round here call me the Junk Queen. If you've got scrap, oddities or just plain junk... I'll make you a fair deal. Take a look — maybe you'll find somethin' useful too.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[80vh] overflow-y-auto p-6 text-white border border-orange-400 shadow-xl bg-zinc-900 rounded-xl scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-zinc-800">
        <button
          onClick={onClose}
          className="absolute text-orange-400 top-3 right-3 hover:text-red-500"
        >
          <FaTimes />
        </button>

        <NPCHeader
          imageSrc="/images/npc/junktrader.png"
          name='Maggie "Junk Queen" Malone'
          introText={npcIntroText}
        />
        <p className="mt-2 text-sm text-center text-green-300">💰 You have ${playerMoney.toFixed(2)}</p>

        <div className="flex flex-col gap-6 mt-6 md:flex-row">
          <ShopInventory
            categorizedShop={categorizedShop}
            onBuy={handleBuy}
          />
          <PlayerInventory
            playerInventory={playerInventory}
            onSell={handleSell}
          />
        </div>
      </div>
    </div>
  );
}
