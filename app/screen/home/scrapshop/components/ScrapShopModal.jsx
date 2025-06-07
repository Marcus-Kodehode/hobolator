'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function ScrapShopModal({ onClose }) {
  const [scrapToConvert, setScrapToConvert] = useState(0);

  const handleConvert = () => {
    const currentScrap = parseInt(localStorage.getItem('playerJunk') || '0');
    const currentMoney = parseFloat(localStorage.getItem('playerMoney') || '0');

    if (scrapToConvert <= 0 || scrapToConvert > currentScrap) {
      alert('Invalid amount of scrap!');
      return;
    }

    // Update scrap
    localStorage.setItem('playerJunk', currentScrap - scrapToConvert);

    // Update money
    const moneyEarned = scrapToConvert * 0.1;
    localStorage.setItem('playerMoney', (currentMoney + moneyEarned).toFixed(2));

    // Notify UI
    window.dispatchEvent(new Event('playerStatsChanged'));

    alert(`Converted ${scrapToConvert} scrap for $${moneyEarned.toFixed(2)}!`);
    setScrapToConvert(0);
  };

  const currentScrap = parseInt(localStorage.getItem('playerJunk') || '0');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 text-white border border-orange-400 shadow-xl bg-zinc-900 rounded-xl">
        <button
          onClick={onClose}
          className="absolute text-orange-400 top-3 right-3 hover:text-red-500"
        >
          <FaTimes />
        </button>

        {/* NPC Portrait */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/images/npc/scrappyjoe.png"
            alt="Scrappy Joe"
            width={100}
            height={100}
            className="mb-2 border-2 border-orange-300 rounded-full"
          />
          <h2 className="text-lg font-bold text-orange-300">Scrappy Joe's</h2>
          <p className="text-sm text-zinc-400">Convert your scrap into cash!</p>
        </div>

        {/* Scrap Converter */}
        <div className="mt-6 space-y-3 text-sm">
          <p>
            You currently have{' '}
            <span className="font-bold text-yellow-300">{currentScrap} scrap</span>.
          </p>

          <input
            type="number"
            min="1"
            max={currentScrap}
            value={scrapToConvert}
            onChange={(e) => setScrapToConvert(parseInt(e.target.value))}
            className="w-full px-3 py-2 text-black rounded"
            placeholder="Enter amount of scrap to convert"
          />

          <button
            onClick={handleConvert}
            className="w-full px-4 py-2 font-semibold bg-orange-600 rounded hover:bg-orange-500"
          >
            Convert Scrap ➜ Money ($0.1 per scrap)
          </button>
        </div>
      </div>
    </div>
  );
}
